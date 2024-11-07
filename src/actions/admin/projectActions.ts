
"use server";

import { cookies } from "next/headers";

export async function addProjectAction(prevState: unknown, formData: FormData){
    const API_ENDPOINT = `${process.env.BASE_API_ENDPOINT}/project`;

    const hasToken = (await cookies()).has("bj.dev-token");
    if(!hasToken){
        return 'Token is missing or not available';
    }
    const token = (await cookies()).get("bj.dev-token")?.value as string;

    const options = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        },
        body: JSON.stringify({
            title: formData.get("title"),
            description: formData.get("description"),
            projectUrl: formData.get("projectUrl"),
            thumbnail: formData.get("thumbnail"),
            githubUrl: formData.get("githubUrl"),
            stacks: formData.get("stacks"),
        })
    }

    try{
        const response = await fetch(API_ENDPOINT, options)
        const data = await response.json();

        console.log(data)
        return data;


    }catch(error){
        if(error instanceof Error){
            return "Something went wrong " + error.message;
        }
    }
}