import Button from "@/components/Button/Button";
import Footer from "@/components/Footer/Footer";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function ThankYouPage() {
  return (
    <>
      <main className="h-screen py-14 px-4">
        <div className="py-10 space-y-8">
          <h1 className="text-4xl font-bold">Thank you! 🎉</h1>
          <p className="py-2 max-w-2xl">
            I have received your message and will answer as soon as possible! I
            design and create{" "}
            <span className="text-sky-500">
              functional and beautiful applications
            </span>{" "}
            with passion and a focus on{" "}
            <span className="text-sky-500">user experience</span> and{" "}
            <span className="text-sky-500">high quality.</span>
          </p>
        </div>
        <div>
          <Link href={"/"}>
            <Button className="group">
              <ArrowLeft className="group-hover:-translate-x-1 transition-transform ease-in-out duration-500" />
              Back to home
            </Button>
          </Link>
        </div>
      </main>
      <footer className="py-6 footer">
        <Footer />
      </footer>
    </>
  );
}
