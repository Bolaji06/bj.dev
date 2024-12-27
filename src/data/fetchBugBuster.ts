const API = `${process.env.NEXT_PUBLIC_BASE_API_ENDPOINT}`;

export async function getBugBusterList() {
  try {
    const response = await fetch(`${API}/bug`, { next: { tags: ["bug-busters"] } });
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
