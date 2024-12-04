"use client";

import { ReactTyped } from "react-typed";

interface TypeWriterProps  {
  streams: string[];
  className?: string
  typeSpeed: number | 40
}

export default function TypeWriter({ streams, className, typeSpeed }: TypeWriterProps) {
  return (
    <>
      <div className="mx-auto">
        <ReactTyped
          strings={streams}
          typeSpeed={typeSpeed}
          backSpeed={50}
          loopCount={4}
          cursorChar="🟠"
          className={`${className}`}
        />
      </div>
    </>
  );
}
