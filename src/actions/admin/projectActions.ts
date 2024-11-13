"use server";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export async function addProjectAction(prevState: unknown, formData: FormData) {
  const API_ENDPOINT = `${process.env.BASE_API_ENDPOINT}/project`;

  const hasToken = (await cookies()).has("bj.dev-token");
  if (!hasToken) {
    return "Token is missing or not available";
  }
  const token = (await cookies()).get("bj.dev-token")?.value as string;
  const bodyData = {
    title: formData.get("title"),
    description: formData.get("description"),
    url: formData.get("projectUrl"),
    thumbnail: formData.get("thumbnail"),
    githubUrl: formData.get("githubUrl"),
    stacks: new Array(formData.get("stacks")),
    about: formData.get("about"),
  };

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify(bodyData),
  };

  try {
    const response = await fetch(API_ENDPOINT, options);
    const data = await response.json();

    revalidateTag("project");
    return data;
  } catch (error) {
    if (error instanceof Error) {
      return "Something went wrong " + error.message;
    }
  }
}
