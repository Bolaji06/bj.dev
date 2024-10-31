"use client";
import { contactFormAction } from "@/actions/contactFormAction";
import Button from "../Button/Button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { ChangeEvent, useActionState, useEffect, useState } from "react";
import { IContactFormError } from "@/definition/definition";
import InputError from "../InputError/InputError";
import { contactFormSchemaType } from "@/definition/validation";

export default function ContactForm() {
  const [state, contactAction] = useActionState(contactFormAction, null);
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
            onChange={handleContactInput}
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
          <Button type="submit" className="w-full">
            Send
          </Button>
        </div>
      </form>
    </>
  );
}
