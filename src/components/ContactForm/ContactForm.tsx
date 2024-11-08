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
    if (!state?.success) {
      toast.error(
        <div className="text-sm capitalize font-medium">{state?.message}</div>,
        {
          duration: 4000,
        }
      );
    }
    toast.success(
      <div className="text-sm capitalize font-medium">{state?.message}</div>,
      {
        duration: 4000,
      }
    );
  }, [state?.success]);

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
          <FormButton isPending={isPending}>
            {isPending ? "Sending email" : "Send"}
          </FormButton>
        </div>
      </form>
    </>
  );
}
