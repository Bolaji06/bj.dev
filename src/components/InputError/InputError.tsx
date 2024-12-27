
export interface InputErrorProps {
    message: string;
    path: string[] | undefined;
    name: string;
}

export default function InputError({
  message,
  path,
  name,
}: InputErrorProps): React.JSX.Element {
  return (
    <>
      {path?.[0] === name && <p className="text-sm text-red-500">{message}</p>}
    </>
  );
}
