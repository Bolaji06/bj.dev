"use server";

import { contactFormSchema } from "@/definition/validation";
import { makeApiRequest } from "@/utils/makeApiRequest";

export async function contactFormAction(
  prevState: unknown,
  formData: FormData
) {
  const url = `${process.env.BASE_API_ENDPOINT}/send-email`;

  const rawData = {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message")
  }
  const parseContactSchema = contactFormSchema.safeParse(rawData);

  if (!parseContactSchema.success) {
    const validateInput = parseContactSchema.error.errors.map((issues) => {
      return {
        message: issues.message,
        path: issues.path,
        input: rawData
      };
    });
    return validateInput[0];
  }
  const method = "POST";
  const body = parseContactSchema.data;

  try {
    const data = await makeApiRequest({ url, method, body });

    return data;
  } catch (error) {
    if (error instanceof Error) {
      return "Something went wrong " + error.message;
    }
  }
}

