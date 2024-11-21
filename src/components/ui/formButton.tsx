"use client";

import { useFormStatus } from "react-dom";
import FormButton from "../FormButton/FormButton";


export default function FormButtonClient({ title, className }: { title: string, className?: string}) {
  const { pending } = useFormStatus();

  return (
    <>
      <FormButton isPending={pending} className={`${className}`}>
        {!pending && title}
      </FormButton>
    </>
  );
}
