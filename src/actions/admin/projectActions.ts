"use server";
import { getToken } from "@/utils/getToken";
import { makeApiRequest } from "@/utils/makeApiRequest";
import { revalidateTag } from "next/cache";
import { projectFormData } from "./formData";

const API_ENDPOINT = `${process.env.BASE_API_ENDPOINT}/project`;

/**
 * Server Action that adds new project
 * @param prevState - current state
 * @param formData - FormData values
 * @returns data
 */
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

/**
 * Server Action to update project by title
 * @param title - Project title to be updated
 * @param formData - FormData values
 * @returns Promise
 */
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
      return "Something went wrong";
    }
  }
}

/**
 * Server Action to delete project by title
 * @param title - Project title to delete
 * @returns Promise
 */
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
      return "Something went wrong";
    }
  }
}
