"use client";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

export default function ProgressBarProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <ProgressBar
        height="3px"
        color="#eab308"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  );
}
