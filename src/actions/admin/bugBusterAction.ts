import { getToken } from "@/utils/getToken";
import { addBugBusterFormData } from "./formData";
import { makeApiRequest } from "@/utils/makeApiRequest";
import { revalidateTag } from "next/cache";

const API = process.env.NEXT_PUBLIC_BASE_API_ENDPOINT;

export async function addBugBuster(prevState: unknown, formData: FormData) {
  const token = await getToken();

  if (!token) {
    return "Token is missing";
  }
  const body = addBugBusterFormData(formData);
  const url = `${API}/bug`;
  const method = "POST";

  try {
    const data = await makeApiRequest({ url, method, token, body });

    revalidateTag("bug-busters");
    return data;
  } catch (error) {
    if (error) {
      console.log(error);
      return error;
    }
  }
}

export async function updateBugBuster(id: string, formData: FormData) {
  const token = await getToken();

  if (!token) {
    return "Token is missing";
  }
  const body = {
    title: formData.get("title"),
    backstory: formData.get("backstory"),
    tags: new Array(formData.get("tags")),
    solution: formData.get("solution"),
  };
  const url = `${API}/bug/${id}`;
  const method = "PATCH";

  try {
    const data = await makeApiRequest({ url, method, token, body });
    revalidateTag("bug-busters");
    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error);
      return "Server error";
    }
  }
}

export async function deleteBugBuster(id: string) {
  const token = await getToken();

  if (!token) {
    return "Token is missing";
  }
  const url = `${API}/bug/${id}`;
  const method = "DELETE";

  try {
    const data = await makeApiRequest({ url, method, token });
    revalidateTag("bug-busters");
    return data;
  } catch (error) {
    if (error instanceof Error) {
      return "Server Error";
    }
  }
}
