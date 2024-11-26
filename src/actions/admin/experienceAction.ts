"use server";

import { getToken } from "@/utils/getToken";
import { makeApiRequest } from "@/utils/makeApiRequest";
import { revalidateTag } from "next/cache";
import { experienceFormData } from "./formData";

const API = process.env.BASE_API_ENDPOINT;

export async function addExperience(prevState: unknown, formData: FormData) {
  const token = await getToken();

  if (!token) {
    return "Token is missing";
  }

  const body = experienceFormData(formData);
  const url = `${API}/experience`;
  const method = "POST";

  try {
    const data = await makeApiRequest({ url, method, body, token });

    revalidateTag("experience");
    return data;
  } catch (error) {
    if (error instanceof Error) {
      return "Something went wrong: " + error.message;
    }
  }
}

export async function deleteExperienceAction(title: string) {
  const token = await getToken();

  if (!token) {
    return "Token is missing";
  }

  const url = `${API}/experience/${title}`;
  const method = "DELETE";

  try {
    const data = await makeApiRequest({ url, method, token });

    revalidateTag("experience");

    return data;
  } catch (error) {
    if (error instanceof Error) {
      return "Something went wrong " + error;
    }
  }
}

export async function updateExperience(title: string, formData: FormData) {
  const token = await getToken();
  if (!token) {
    return "Token is missing";
  }

  const body = experienceFormData(formData);

  const url = `${API}/experience/${title}`;
  const method = "PATCH";

  try {
    const data = await makeApiRequest({ url, method, token, body });

    revalidateTag("experience");

    return data;
  } catch (error) {
    if (error instanceof Error) {
      return "Something went wrong";
    }
  }
}
