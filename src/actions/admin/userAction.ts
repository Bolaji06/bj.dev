"use server";

import { getToken } from "@/utils/getToken";
import { makeApiRequest } from "@/utils/makeApiRequest";
import { revalidateTag } from "next/cache";
import { userFormData } from "./formData";

/**
 * Update user profile information
 * @param prevState - Current state
 * @param formData - FormData values
 * @returns Promise
 */
export async function updateUser(prevState: unknown, formData: FormData) {
  const url = `${process.env.BASE_API_ENDPOINT}/user`;
  const method = "PATCH";

  const token = await getToken();
  if (!token) {
    return "Token is missing";
  }

  const body = userFormData(formData);

  try {
    const data = await makeApiRequest({ url, method, token, body });

    revalidateTag("user");
    return data;
  } catch (error) {
    if (error instanceof Error) {
      return "Something went wrong " + error.message;
    }
  }
}
