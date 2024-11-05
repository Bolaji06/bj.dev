"use server";

import { authLogin, authRegister, localBaseEndpoint } from "@/const/const";
import { adminAuthSchema } from "@/definition/validation";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function adminLoginAction(prevState: unknown, formData: FormData) {
  const parseAuthSchema = adminAuthSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!parseAuthSchema.success) {
    const validateFormInput = parseAuthSchema.error.errors.map((issues) => {
      return {
        message: issues.message,
        path: issues.path,
      };
    });
    return validateFormInput[0];
  }

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(parseAuthSchema.data),
  };

  try {
    const response = await fetch(`${localBaseEndpoint}${authLogin}`, options);
    const data = await response.json();

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
  const parseAuthSchema = adminAuthSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!parseAuthSchema.success) {
    const validateFormInput = parseAuthSchema.error.errors.map((issues) => {
      return {
        message: issues.message,
        path: issues.path,
      };
    });
    return validateFormInput[0];
  }

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(parseAuthSchema.data),
  };

  try {
    const response = await fetch(
      `${localBaseEndpoint}${authRegister}`,
      options
    );
    const data = await response.json();

    return data;
  } catch (error) {
    if (error instanceof Error) {
      return "Something went wrong " + error.message;
    }
  }
}
