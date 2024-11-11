import { Loader2 } from "lucide-react";
import Button from "../Button/Button";
import clsx from "clsx";

interface IFormButtonProps {
  isPending: boolean;
  children: React.ReactNode;
  className?: string;
}
export default function FormButton({
  isPending,
  children,
  className
}: IFormButtonProps): React.JSX.Element {
  return (
    <>
      <Button
        type="submit"
        className={`w-full flex items-center gap-3 ${clsx({
          "cursor-not-allowed text-white bg-opacity-50": isPending,
        })} ${className}`}
      >
        {isPending && <Loader2 size={18} className="animate-spin" />}
        
        {children}
      </Button>
    </>
  );
}
