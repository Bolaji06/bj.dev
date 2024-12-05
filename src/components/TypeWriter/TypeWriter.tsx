"use client";

import { ReactTyped } from "react-typed";

interface TypeWriterProps  {
  streams: string[];
  className?: string;
  typeSpeed: number | 40;
  showCursor: boolean;
}

export default function TypeWriter({ streams, className, typeSpeed, showCursor }: TypeWriterProps) {
  return (
    <>
      <div className="mx-auto">
        <ReactTyped
          strings={streams}
          typeSpeed={typeSpeed}
          backSpeed={50}
          loopCount={4}
          cursorChar="🟠"
          showCursor={showCursor}
          className={`${className}`}
        />
      </div>
    </>
  );
}
