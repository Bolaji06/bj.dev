"use client";

import Button from "@/components/Button/Button";
import { useEffect } from "react";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {

    useEffect(() => {
        console.log(error);
    }, [error])


  return (
    <>
      <main className="py-28">
        <div className="flex justify-center items-center flex-col space-y-20 text-center w-full">
          <div className="w-full">
            <h2 className="text-2xl font-semibold">Something went wrong!</h2>
          </div>
          <Button onClick={() => reset()} className="">Try again!</Button>
          <p className="text-sm">You can check your network connection</p>
        </div>
      </main>
    </>
  );
}
