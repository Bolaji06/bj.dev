import React from "react";

export interface LabelProps extends React.HTMLAttributes<HTMLLabelElement> {
  children?: React.ReactNode;
}

export default React.forwardRef<HTMLLabelElement, LabelProps>(function Label(
  { children, className, ...props },
  ref
) {
  return (
    <label
      className={`text-sm focus:text-text_primary text-gray-500 ${className}`}
      ref={ref}
      {...props}
    >
      {children}
    </label>
  );
});
