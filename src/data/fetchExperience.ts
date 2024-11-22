const API = process.env.BASE_API_ENDPOINT;

export default async function getExperience() {
    const options = {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
        },
        next: {
            tags: ["experience"]
        }
    }
  try {
    const response = await fetch(`${API}/experience`, options);
    const data = await response.json();

    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error);
    }
  }
}
