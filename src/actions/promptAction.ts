"user server";

const API = "http://localhost:7000/api/profile";

export async function sendPrompt(prevState: unknown, formData: FormData) {
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
    const response = await fetch(API, options);
    const data = await response.json();

    console.log(data)
    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
}
