
const API = `${process.env.BASE_API_ENDPOINT}`;

export async function getBugBuster(id: string) {
  try {
    const response = await fetch(`${API}/buster/${id}`);
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

export async function fetchBugBusterList() {
  try {
    const response = await fetch(`${API}/buster`, {
      next: { tags: ["bug-busters"] },
    });
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
