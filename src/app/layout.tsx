import type { Metadata } from "next";
import { poppins } from "./fonts/font";
import localFont from "next/font/local";
import "./globals.css";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/footer/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main className="scroll-smooth">
          <NavBar />
          <section className="max-w-4xl mx-auto">
            {children}
          </section>
        </main>
        <Footer />
        
      </body>
    </html>
  );
}
