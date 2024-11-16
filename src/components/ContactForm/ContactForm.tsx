"use client";
import { contactFormAction } from "@/actions/contactFormAction";

import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { ChangeEvent, useActionState, useEffect, useState } from "react";
import { IContactFormError } from "@/definition/definition";
import InputError from "../InputError/InputError";
import { contactFormSchemaType } from "@/definition/validation";

import FormButton from "../FormButton/FormButton";
import toast from "react-hot-toast";
import { useRef } from "react";
import { useRouter } from "next/navigation";

export default function ContactForm() {
  const [state, contactAction, isPending] = useActionState(
    contactFormAction,
    null
  );
  const [inputError, setInputError] = useState<IContactFormError | null>(null);
  const [inputState, setInputState] = useState<contactFormSchemaType>({
    name: "",
    message: "",
    email: "",
  });

  const hasMount = useRef(false);
  const router = useRouter();

  useEffect(() => {
    if (state) {
      setInputError(state);
    }
  }, [state]);

  function handleContactInput(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setInputState((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }

  useEffect(() => {
    if (hasMount.current) {
      if (state?.success) {
        toast.success(
          <div className="capitalize font-medium">{state?.message}</div>,
          { duration: 3000 }
        );
        router.push("/thank-you")
        
      } else if(state?.success === false) {
        toast.error(
          <div className="capitalize font-medium">{state?.message}</div>,
          { duration: 3000 }
        );
      }
    } else {
      hasMount.current = true;
    }
  }, [state]);

  return (
    <>
      <form action={contactAction} className="space-y-4">
        <div>
          <label htmlFor="name" className="text-gray-400 text-sm">
            Name
          </label>
          <Input
            id="name"
            name="name"
            onChange={handleContactInput}
            onFocus={() => setInputError(null)}
            value={inputState.name}
          />
          {inputError && (
            <InputError
              message={inputError.message}
              path={inputError.path}
              name="name"
            />
          )}
        </div>
        <div>
          <label htmlFor="email" className="text-gray-400 text-sm">
            Email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            onChange={handleContactInput}
            onFocus={() => setInputError(null)}
            value={inputState.email}
          />
          {inputError && (
            <InputError
              message={inputError.message}
              path={inputError.path}
              name="email"
            />
          )}
        </div>

        <div>
          <label htmlFor="message" className="text-gray-400 text-sm">
            Message
          </label>
          <Textarea
            id="message"
            name="message"
            onChange={handleContactInput}
            onFocus={() => setInputError(null)}
            value={inputState.message}
          />
          {inputError && (
            <InputError
              message={inputError.message}
              path={inputError.path}
              name="message"
            />
          )}
        </div>

        <div className="py-2">
          <FormButton isPending={isPending} className="text-white">
            {isPending ? "Sending email" : "Send"}
          </FormButton>
        </div>
      </form>
    </>
  );
}
