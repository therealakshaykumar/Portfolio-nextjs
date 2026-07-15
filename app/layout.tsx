import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/Footer";
import ThemeSwitch from "@/components/Theme";
import SmoothScroll from "@/components/SmoothScroll";
import GlassCursor from "@/components/GlassCursor";
import ConsoleEasterEgg from "@/components/ConsoleEasterEgg";
import {Outfit} from 'next/font/google';

const outfit = Outfit({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Akshay Kumar | Full-Stack Developer Portfolio",
  description: "Akshay Kumar is a full-stack developer with 2+ years of experience specializing in Node.js, Express, React, and Next.js.",
  keywords: ["Akshay Kumar", "Full-Stack Developer", "Node.js Developer", "React Developer", "Next.js Portfolio", "Software Engineer"],
  authors: [{ name: "Akshay Kumar" }],
  creator: "Akshay Kumar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://therealakshay.vercel.app/",
    title: "Akshay Kumar | Full-Stack Developer",
    description: "Full-stack developer specializing in building high-performance web applications with Node.js and React.",
    siteName: "Akshay Kumar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Akshay Kumar | Full-Stack Developer",
    description: "Full-stack developer specializing in building high-performance web applications with Node.js and React.",
  },
  metadataBase: new URL("https://therealakshay.vercel.app/"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased ${outfit.className} relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <SmoothScroll>
          <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
          <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
          <Header />
          {children}
          <Footer />
          <Toaster position="bottom-right" />
          <ThemeSwitch />
          <GlassCursor />
          <ConsoleEasterEgg />
        </SmoothScroll>
      </body>
    </html>
  );
}
