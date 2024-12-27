"use client";

//import { IContactFormError } from "@/definition/definition";
import { contactFormSchemaType } from "@/definition/validation";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { Input } from "../ui/input";
import FormButton from "../FormButton/FormButton";
import { Textarea } from "../ui/textarea";

import { useServerAction } from "zsa-react";
import { contactFormActionWithZsa } from "@/actions/contactFormAction";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function ExperimentalContactForm() {
  const {
    data,
    isSuccess,
    isPending,
    isError,
    error,
    executeFormAction,
    reset,
  } = useServerAction(contactFormActionWithZsa);
  const [inputState, setInputState] = useState<contactFormSchemaType>({
    name: "",
    message: "",
    email: "",
  });
  const hasMount = useRef(false);
  const router = useRouter();

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
    if (error && error?.code === "TIMEOUT") {
      toast.error(
        <div className="capitalize font-medium">{error?.message}</div>,
        { duration: 3000 }
      );
      console.log(error.code);
      return;
    }
  }, [error]);

  useEffect(() => {
    if (hasMount.current) {
      if (isSuccess && data?.success) {
        toast.success(
          <div className="capitalize font-medium">{data?.message}</div>,
          { duration: 3000 }
        );
        router.push("/thank-you");
      } else if (!isSuccess && !data?.success) {
        toast.error(
          <div className="capitalize font-medium">{data?.message}</div>,
          { duration: 3000 }
        );
      }
    } else {
      hasMount.current = true;
    }
  }, [data, error]);

  return (
    <>
      <form action={executeFormAction} noValidate className="space-y-4">
        <div>
          <label htmlFor="name" className="text-gray-400 text-sm">
            Name
          </label>
          <Input
            id="name"
            name="name"
            onChange={handleContactInput}
            onFocus={() => reset()}
            value={inputState.name}
          />
          {isError && (
            <p className="text-sm text-red-500">
              {error?.fieldErrors?.name?.[0]}
            </p>
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
            onFocus={() => reset()}
            value={inputState.email}
          />
          {isError && (
            // <InputError
            //   message={error?.message[0]}
            //   path={error.fieldErrors?.email}
            //   name="email"
            // />
            <p className="text-red-500 text-sm">
              {error?.fieldErrors?.email?.[0]}
            </p>
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
            onFocus={() => reset()}
            value={inputState.message}
          />
          {isError && (
            // <InputError
            //   message={error.message}
            //   path={error.fieldErrors?.message}
            //   name="message"
            // />
            <p className="text-sm text-red-500">
              {error?.fieldErrors?.message?.[0]}
            </p>
          )}
        </div>

        <div className="py-2">
          <FormButton isPending={isPending} className="text-white">
            {isPending ? "Sending email" : "Send"}
          </FormButton>
        </div>
        {error && error.code === "TIMEOUT" && (
          <div>
            <p className="text-sm text-red-500">{error?.message}</p>
          </div>
        )}
      </form>
    </>
  );
}
