import Button from "../Button/Button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

export default function ContactForm(){

    return (
        <>
            <form action="" className="space-y-4">
                <div>
                    <label htmlFor="name" className="text-gray-400 text-sm">Name</label>
                    <Input id="name"/>
                </div>
                <div>
                    <label htmlFor="email" className="text-gray-400 text-sm">Email</label>
                    <Input id="email"/>
                </div>

                <div>
                <label htmlFor="email" className="text-gray-400 text-sm">Message</label>
                    <Textarea />
                </div>
               
               <div className="py-2">
                <Button type="submit" className="w-full">
                    Send
                </Button>
               </div>
            </form>
        </>
    )
}