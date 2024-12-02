"use client";

import { ReactTyped } from "react-typed";

export default function TypeWriter() {
  return (
    <>
      <div className="mx-auto py-4">
        <ReactTyped
          strings={[
            "Ask about my experience",
            "Ask about my past project",
            "Ask about my work ethics",
            "Ask about Me",
          ]}
          typeSpeed={40}
          backSpeed={50}
          loopCount={4}
          cursorChar="🟠"
          className="text-center text-3xl font-semibold text-gray-500"
        />
      </div>
    </>
  );
}
