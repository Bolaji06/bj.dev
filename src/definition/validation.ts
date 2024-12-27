
import z from "zod"

const emailSchema = z.string().email({ message: "Invalid email" });
const passwordSchema = z.string({ required_error: 'This field is required'}).min(4, { message: 'Min. password should be 4'})


export const contactFormSchema = z.object({
    name: z.string({ required_error: 'Name is required'}).min(1, { message: 'Name is short'}),
    email: emailSchema,
    message: z.string({ required_error: 'You need to add a message body'}).min(10, { message: 'Min. should be 10 character long'}),
});

export const adminAuthSchema = z.object({
    email: emailSchema,
    password: passwordSchema,
});

export const addBugBusterSchema = z.object({
    title: z.string({ required_error: 'Title is required'}).min(5, { message: "Must be 5 character long" }),
    backstory: z.string().optional(),
    tags: z.string(),
    solution: z.string({ required_error: "Buster is required: How you solved the bug" }),
})

export type contactFormSchemaType = z.infer<typeof contactFormSchema>;
export type adminAuthSchemaType = z.infer<typeof adminAuthSchema>;
export type addBugBusterSchema = z.infer<typeof addBugBusterSchema>;