"use server";

import { contactFormSchema } from "@/definition/validation"
import { ZodError } from "zod";

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
        body: JSON.stringify(parseContactSchema)
    }

    try{
        const response = await fetch('api', options);
        const data = await response.json();

        console.log(data);
        return data
        

    }catch(error){
        if (error instanceof ZodError){
            const validateInput = error.errors.map((issues) => {
                return {
                    message: issues.message,
                    path: issues.path,
                }
            })
            return validateInput;
        }
    }

}