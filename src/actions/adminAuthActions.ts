"use server";

import { adminAuthSchema } from "@/definition/validation";
import { makeApiRequest } from "@/utils/makeApiRequest";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function adminLoginAction(prevState: unknown, formData: FormData) {
  const url = `${process.env.BASE_API_ENDPOINT}/auth/login`;

  const parseSchema = adminAuthSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!parseSchema.success) {
    const validateFormInput = parseSchema.error.errors.map((issues) => {
      return {
        message: issues.message,
        path: issues.path,
      };
    });
    return validateFormInput[0];
  }
  const method = "POST";
  const body = parseSchema.data;

  try {
    const data = await makeApiRequest({ url, method, body });

    if (data.success) {
      (await cookies()).set("bj.dev-token", data.jwtPayload);
      redirect("/admin/dashboard");
    }
    return data;
  } catch (error) {
    if (error instanceof Error) {
      return "Something went wrong " + error.message;
    }
  }
}

export async function adminRegisterAction(
  prevState: unknown,
  formData: FormData
) {
  const url = `${process.env.BASE_API_ENDPOINT}/auth/register`;

  const parseSchema = adminAuthSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!parseSchema.success) {
    const validateFormInput = parseSchema.error.errors.map((issues) => {
      return {
        message: issues.message,
        path: issues.path,
      };
    });
    return validateFormInput[0];
  }

  const body = parseSchema.data;
  const method = "POST";

  try {
    const data = await makeApiRequest({ url, method, body });

    return data;
  } catch (error) {
    if (error instanceof Error) {
      return "Something went wrong " + error.message;
    }
  }
}
