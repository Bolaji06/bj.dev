import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: string;
}

export default React.forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { className, children, ...props },
  ref
): React.JSX.Element {
  return (
    <>
      <button
        className={`${className} bg-secondary text-white rounded-md text-center h-10 px-3`}
        ref={ref}
        {...props}
      >
        { children }
      </button>
    </>
  );
});
