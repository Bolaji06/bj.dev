
"use server";

import { cookies } from "next/headers";

export async function ExperienceAction(prevState: unknown, formData: FormData){
    const hasToken = (await cookies()).has("bj.dev-token");

    if(!hasToken){
        return 'Token is missing'
    }
    const token = (await cookies()).get("bj.dev-token")?.value as string;

    const bodyData = {
        title: formData.get("title"),
        company: formData.get("company"),
        role: formData.get("role"),
        description: formData.get("description"),
        startDate: new Date(formData.get("startDate") as string).toISOString(),
        endDate: new Date(formData.get("endDate") as string).toISOString()
    }
    const options = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token,
        },
        body: JSON.stringify(bodyData)
    }

    try{
        const response = await fetch(`${process.env.BASE_API_ENDPOINT}/experience`, options);
        const data = await response.json();

        return data;

    }catch(error){
        if(error instanceof Error){
            return "Something went wrong " + error.message
        }
    }
}