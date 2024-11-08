"use server";

import { contactFormSchema } from "@/definition/validation"


export async function contactFormAction(prevState: unknown, formData: FormData){
    const parseContactSchema = contactFormSchema.safeParse({
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
    });

    if (!parseContactSchema.success){
        const validateInput = parseContactSchema.error.errors.map((issues) => {
            return {
                message: issues.message,
                path: issues.path
            }
        })
        return validateInput[0];
    }
    const options = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(parseContactSchema.data)
    }

    try{
        const response = await fetch(`${process.env.BASE_API_ENDPOINT}/send-email`, options);
        const data = await response.json();

        console.log(data);
        return data
        

    }catch(error){
        if (error instanceof Error){
            return "Something went wrong " + error.message; 
        }
    }

}