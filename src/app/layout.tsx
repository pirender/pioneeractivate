import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pi Network - Pi Blockchain, Community & Developer Platform | Pi Network",
  description: "Pi Network - Pi Blockchain, Community & Developer Platform | Pi Network",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <body className={inter.className}>{children}</body>
    </html>
  );
}
