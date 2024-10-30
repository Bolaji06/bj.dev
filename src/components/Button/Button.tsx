//import { cva } from "class-variance-authority";
import { cva, VariantProps } from "class-variance-authority";
import React from "react";

export const buttonVariants = cva({
  variants: {
    variant: {
      default: '',
      primary: '',
      secondary: '',
      ghost: '',
    },
    sizes: {
      default: '',
      sm: '',
      lg: '',
      icon: ''
    }
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  }
})
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  variant?: string;
  icon?: React.ReactNode
}

export default React.forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { className, children, ...props },
  ref
): React.JSX.Element {
  return (
    <>
      <button
        className={`${className} bg-secondary text-white rounded-md text-center h-10 flex justify-center items-center gap-2 font-medium px-4 py-6`}
        ref={ref}
        {...props}
        data-testid={"custom-button"}
      >
        { children }
      </button>
    </>
  );
});
