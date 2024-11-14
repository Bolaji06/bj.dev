import { decrypt } from "@/lib/session";
import { JwtPayload } from "jwt-decode";
import { cookies } from "next/headers";

interface IJwt extends JwtPayload {
  id?: number;
  name?: string;
}

export async function getUser() {
  const hasCookie = (await cookies()).has("bj.dev-token");
  if (!hasCookie) {
    return "Token is missing";
  }
  const cookieToken = (await cookies()).get("bj.dev-token")?.value as string;
  const payload: IJwt = decrypt(cookieToken);

  const API_ENDPOINT = `${process.env.BASE_API_ENDPOINT}/user/${payload?.id}`;
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    next: {
      tags: ["user"],
    },
  };

  try {
    const response = await fetch(API_ENDPOINT, options);
    const data = await response.json();

    return data;
  } catch (error) {
    if (error instanceof Error) {
      return "Something went wrong " + error.message;
    }
  }
}

export async function getUserById() {
  const API_ENDPOINT = `${process.env.BASE_API_ENDPOINT}/user/2`;

  try {
    const response = await fetch(API_ENDPOINT);
    const data = await response.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      return "Something went wrong " + error;
    }
  }
}
