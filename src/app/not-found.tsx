import Button from "@/components/Button/Button";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <main className="py-20">
        <div className="flex flex-col justify-center items-center text-center space-y-6">
          <div className="space-y-10">
            <h1 className="text-4xl py-2 font-semibold">404</h1>
            <h2 className="text-3xl py-2">Page Not Found</h2>
          </div>

          <div className="mx-auto">
            <Link href={"/"} className="text-center">
              <Button className="text-center">Back to home</Button>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
