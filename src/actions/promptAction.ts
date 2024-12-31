"user server";

export async function sendPrompt(prevState: unknown, formData: FormData) {
  const url = `${process.env.NEXT_PUBLIC_BASE_API_ENDPOINT}/profile`;
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
    const data = await response.json();

    return data;
  } catch (error) {
    if (error instanceof Error) {
      return "Something went wrong " + error;
    }
  }
}
