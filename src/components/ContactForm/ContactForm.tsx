"use client";
import { contactFormAction } from "@/actions/contactFormAction";

import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { useActionState, useEffect, useState } from "react";
import { IContactFormError } from "@/definition/definition";
import InputError from "../InputError/InputError";


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

  const hasMount = useRef(false);
  const router = useRouter();

  useEffect(() => {
    if (state) {
      setInputError(state);
    }
  }, [state]);

  useEffect(() => {
    if (hasMount.current) {
      if (state?.success) {
        toast.success(
          <div className="capitalize font-medium">{state?.message}</div>,
          { duration: 3000 }
        );
        router.push("/thank-you");
      } else if (state?.success === false) {
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
      <form action={contactAction} noValidate className="space-y-4">
        <div>
          <label htmlFor="name" className="text-gray-400 text-sm">
            Name
          </label>
          <Input
            id="name"
            name="name"
            onFocus={() => setInputError(null)}
            defaultValue={state?.input?.name}
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
            onFocus={() => setInputError(null)}
            defaultValue={state?.input?.email}
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
            onFocus={() => setInputError(null)}
            defaultValue={state?.input?.message}
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
