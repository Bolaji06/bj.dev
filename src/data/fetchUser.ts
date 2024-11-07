import { decrypt } from "@/lib/session";
import { JwtPayload } from "jwt-decode";
import { cookies } from "next/headers";

interface IJwt extends JwtPayload {
    id?: number;
    name?: string;
}

export async function getUser() {

    const hasCookie = (await cookies()).has("bj.dev-token");
    if(!hasCookie){
        return "Token is missing";
    }
    const cookieToken = (await cookies()).get("bj.dev-token")?.value as string;
    const payload:IJwt = decrypt(cookieToken)

  const API_ENDPOINT = `http://localhost:7000/api/user/${payload?.id}`;
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await fetch(API_ENDPOINT, options);
    const data = response.json();

    console.log(data);
    return data;
  } catch (error) {
    if (error instanceof Error) {
      return "Something went wrong " + error.message;
    }
  }
}
