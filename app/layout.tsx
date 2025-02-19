import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IDEvibe - The New Way to Vibe Code with Cursor",
  description: "Experience the new way of coding with IDEvibe. Transform your development workflow and vibe with your code like never before.",
  icons: {
    icon: [
      {
        url: "/images/idevibelogo.png",
        type: "image/png",
      }
    ],
    apple: [
      {
        url: "/images/idevibelogo.png",
        type: "image/png",
      }
    ],
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
