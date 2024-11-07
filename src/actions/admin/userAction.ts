"use server";

import { cookies } from "next/headers";


export async function userAction(prevState: unknown, formData: FormData){
    const API_ENDPOINT = "http://localhost:7000/api/user";

    const hasToken = (await cookies()).has("bj.dev-token");
    if (!hasToken){
        return "Token is not available";
    }

    const bodyData =  JSON.stringify({
        name: formData.get("fullName"),
        photo: formData.get("photo"),
        links: new Array(formData.get("socials")),
        bio: formData.get("bio")
    });

    console.log(bodyData);

    const token = (await cookies()).get("bj.dev-token")?.value as string;
    const options = {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        },
        body: bodyData
    }

    try{
        const response = await fetch(API_ENDPOINT, options);
        const data = await response.json();

        console.log(data);
        return data;

    }catch(error){
        if (error instanceof Error){
            return "Something went wrong " + error.message;
        }
    }
}