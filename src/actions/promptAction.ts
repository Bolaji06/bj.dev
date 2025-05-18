"use server";

export async function sendPrompt(prevState: unknown, formData: FormData) {
  //const url = `${process.env.NEXT_PUBLIC_BASE_API_ENDPOINT}/profile`;
  const url = 'http://localhost:7000/api';

  const bodyData = {
    query: formData.get("text-input"),
  };
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bodyData),
  };

  try {
    const response = await fetch(url, options);

    if (!response.body) {
      throw new Error("No response body");
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let result = "";
    let done = false;

    // Read the stream
    while (!done) {
      const { value, done: streamDone } = await reader.read();
      done = streamDone;

      if (value) {
        const chunk = decoder.decode(value, { stream: true });
        // Split chunk into lines to process SSE events
        const lines = chunk.split("\n\n");
        for (const line of lines) {
          if (line.startsWith("data:")) {
            const data = line.replace(/^data:\s*/, "").trim();
            if (data === "[DONE]") {
              return { success: true, message: result };
            }
            try {
              const parsed = JSON.parse(data);
              if (parsed.success) {
                result += parsed.message; // Accumulate the message
              } else {
                return { success: false, message: parsed.message };
              }
            } catch (parseError) {
              console.error("Parse error:", parseError);
            }
          }
        }
      }
    }

    return { success: true, message: result };
  } catch (error) {
    console.error(error);
    return { success: false, message: "Something went wrong: " + (error instanceof Error ? error.message : String(error)) };
  }
}