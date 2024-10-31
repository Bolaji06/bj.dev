
import z from "zod"

export const contactFormSchema = z.object({
    name: z.string({ required_error: 'Name is required'}).min(1, { message: 'Name is short'}),
    email: z.string().email({ message: "Invalid email"}),
    message: z.string({ required_error: 'You need to add a message body'}).min(10, { message: 'Min. should be 10 character long'}),
});

export type contactFormSchemaType = z.infer<typeof contactFormSchema>;