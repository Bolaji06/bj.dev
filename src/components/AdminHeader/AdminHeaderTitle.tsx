import { forwardRef } from "react";

interface HeaderTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  title: string;
}
export default forwardRef<HTMLHeadingElement, HeaderTitleProps>(
  function AdminHeaderTitle({ title, className, ...props }, ref) {
    return (
      <header data-testid="headerContainer">
      <h2 data-testid="headerTitle" className={`text-text_primary text-xl font-medium py-3 ${className}`} ref={ref} {...props}>
        {title}
      </h2>
      </header>
    );
  }
);
