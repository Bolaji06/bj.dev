import { Analytics } from '@vercel/analytics/next';

import type { Metadata, Viewport } from "next";
import { poppins } from "./fonts/font";
import localFont from "next/font/local";
import "./globals.css";
import NavBar from "@/components/NavBar/NavBar";

import ProgressBarProvider from "@/components/ui/ProgressBarProvider";
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://bjdev.vercel.app"),
  openGraph: {
    siteName: "bj.dev | Portfolio",
    type: "website",
    locale: "en_US",
  },
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        type: "image/x-icon",
      },
    ],
    shortcut: [
      {
        url: "/favicon.ico",
        type: "image/x-icon",
      },
    ],
  },
  title: {
    default: "Bolaji Bolajoko ",
    template: "%s | Portfolio",
  },
  description:
    "bj.dev: I am Bolaji Bolajoko, Full-stack Software developer. I design and create functional web apps, with a focus of good user experience",
  twitter: {
    card: "summary_large_image",
  },
  authors: [
    {
      name: "Bolaji Bolajoko",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`scroll-smooth ${poppins.className} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ProgressBarProvider>
          <main>
            <NavBar />
            <section className="max-w-4xl mx-auto">{children}</section>
            <Analytics />
          </main>
        </ProgressBarProvider>
      </body>
    </html>
  );
}
