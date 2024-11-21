"use server";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

const API_ENDPOINT = `${process.env.BASE_API_ENDPOINT}/project`;
export async function addProjectAction(prevState: unknown, formData: FormData) {
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

export async function updateProject(title: string, formData: FormData) {
  const hasToken = (await cookies()).has("bj.dev-token");

  if (!hasToken) {
    return "Token is missing";
  }
  const token = (await cookies()).get("bj.dev-token")?.value as string;
  const bodyData = {
    title: formData.get("title"),
    description: formData.get("description"),
    about: formData.get("about"),
    thumbnail: formData.get("thumbnail"),
    url: formData.get("projectUrl"),
    githubUrl: formData.get("githubUrl"),
    stacks: new Array(formData.get("stacks")),
  };

  const options = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify(bodyData),
  };
  try {
    const response = await fetch(`${API_ENDPOINT}/${title}`, options);
    const data = await response.json();

    console.log(data);
    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error);
      return "Something went wrong " + error.message;
    }
  }
}

export async function deleteProject(title: string) {
  const hasToken = (await cookies()).has("bj.dev-token");

  if (!hasToken) {
    return "Token is missing";
  }
  const token = (await cookies()).get("bj.dev-token")?.value as string;
  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  };
  try {
    const response = await fetch(`${API_ENDPOINT}/${title}`, options);
    const data = await response.json();

    console.log(data);
    revalidateTag("projects");
    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error);
      return "Something went wrong " + error.message;
    }
  }
}
