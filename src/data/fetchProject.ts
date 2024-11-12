export async function getProjects() {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await fetch(
      `${process.env.BASE_API_ENDPOINT}/project`,
      options
    );
    const data = await response.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      return "Internal server error " + error.message;
    }
  }
}
