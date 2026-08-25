import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Suvam Naskar | Founding Engineer & Cloud Architect",
  description: "Founding Engineer & Cloud Architect specializing in scalable backend systems, cloud pipelines, and full-stack web/mobile applications.",
  icons: {
    icon: "/src/icon.webp"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="antialiased min-h-screen text-black bg-[#e8e8e8] selection:bg-black selection:text-white">
        {children}
      </body>
    </html>
  );
}
