const API = `${process.env.NEXT_PUBLIC_BASE_API_ENDPOINT}`;

export async function getBugBusterList() {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    next: {
      tags: ["bug-busters"],
    },
  };
  try {
    const response = await fetch(`${API}/bug`, options);
    if (!response.ok) {
      return "Error fetching bug buster";
    }
    const data = await response.json();

    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.log("Server error " + error.message);
      return "Something went wrong while fetching";
    }
  }
}

export async function getBugBuster(id: string) {
  try {
    const response = await fetch(`${API}/bug/${id}`);
    if (!response.ok) {
      return "Error fetching bug buster";
    }
    const data = await response.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      return "Server error";
    }
  }
}
