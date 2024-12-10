// Copyright (c) bj.dev
// Licensed under the MIT License.

import Link from "next/link";

export default function FloatingButton() {
  return (
    <>
      <Link
        href={"#contact"}
        data-testid="link"
        className="fixed z-10 bottom-12 py-4 px-5 right-6 flex items-center text-sm gap-2 bg-amber-600/40 rounded-[2rem] shadow-xl"
      >
        <div className="w-4 h-4 rounded-full bg-green-400 animate-pulse flex justify-center items-center">
          <div data-testid="pulse" className="w-2 h-2 rounded-full bg-green-600" />
        </div>
        Open for work
      </Link>
    </>
  );
}
