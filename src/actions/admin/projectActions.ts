"use server";
import { getToken } from "@/utils/getToken";
import { makeApiRequest } from "@/utils/makeApiRequest";
import { revalidateTag } from "next/cache";
import { projectFormData } from "./formData";

const API_ENDPOINT = `${process.env.BASE_API_ENDPOINT}/project`;

export async function addProjectAction(prevState: unknown, formData: FormData) {
  const token = await getToken();
  if (!token) {
    return "Token is missing";
  }

  const body = projectFormData(formData);
  const url = API_ENDPOINT;
  const method = "POST";

  try {
    const data = await makeApiRequest({ url, method, token, body });

    revalidateTag("projects");
    return data;
  } catch (error) {
    if (error instanceof Error) {
      return "Something went wrong " + error.message;
    }
  }
}

export async function updateProject(title: string, formData: FormData) {
  const token = await getToken();
  if (!token) {
    return "Token is missing";
  }

  const url = `${API_ENDPOINT}/${title}`;
  const body = projectFormData(formData);
  const method = "PATCH";
  try {
    const data = await makeApiRequest({ url, method, token, body });

    revalidateTag("projects");
    return data;
  } catch (error) {
    if (error instanceof Error) {
      return "Something went wrong " + error.message;
    }
  }
}

export async function deleteProject(title: string) {
  const token = await getToken();

  if (!token) {
    return "Token is missing";
  }

  const url = `${API_ENDPOINT}/${title}`;
  const method = "DELETE";

  try {
    const data = await makeApiRequest({ url, method, token });

    revalidateTag("projects");
    return data;
  } catch (error) {
    if (error instanceof Error) {
      return "Something went wrong " + error.message;
    }
  }
}
