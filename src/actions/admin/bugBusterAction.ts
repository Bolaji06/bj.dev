"use server";

import { getToken } from "@/utils/getToken";

import { makeApiRequest } from "@/utils/makeApiRequest";
import { revalidateTag } from "next/cache";

import { addBugBusterSchema } from "@/definition/validation";

const API = process.env.BASE_API_ENDPOINT;

export async function addBugBuster(prevState: unknown, formData: FormData) {
  const token = await getToken();

  if (!token) {
    return "Token is missing";
  }

  const rawData = {
    title: formData.get("title"),
    tags: formData.get("tags"),
    backstory: formData.get("backstory"),
    solution: formData.get("solution"),
  };

  const parseInputSchema = addBugBusterSchema.safeParse(rawData);

  if (!parseInputSchema.success) {
    const validateInput = parseInputSchema.error?.errors.map((issues) => {
      return {
        path: issues.path,
        message: issues.message,
        input: rawData,
      };
    });
    return validateInput[0];
  }
  const body = parseInputSchema.data;

  const url = `${API}/buster`;
  const method = "POST";

  try {
    const data = await makeApiRequest({ url, method, token, body });

    revalidateTag("bug-busters");
    return data;
  } catch (error) {
    if (error instanceof Error) {
      return "Server error";
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
    tags: formData.get("tags"),
    solution: formData.get("solution"),
  };
  const url = `${API}/buster/${id}`;
  const method = "PATCH";

  try {
    const data = await makeApiRequest({ url, method, token, body });
    revalidateTag("bug-busters");

    return data;
  } catch (error) {
    if (error instanceof Error) {
      return "Server error";
    }
  }
}

export async function deleteBugBuster(id: string) {
  const token = await getToken();

  if (!token) {
    return "Token is missing";
  }
  const url = `${API}/buster/${id}`;
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