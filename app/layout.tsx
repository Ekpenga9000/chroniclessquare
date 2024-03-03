import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "../components/Nav";
import { Toaster } from "@components/ui/toaster";
import "../node_modules/highlight.js/styles/atom-one-dark.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chronicles Square | Home",
  description:
    "A repository of how to's and tutorials for web development, software engineering, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/tomorrow-night-blue.min.css"
        />
      </head>
      <body className={inter.className}>
        <main>
          <Nav />
          {children}
          <Toaster />
        </main>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/languages/go.min.js"></script>
        <script>hljs.highjlightAll()</script>
      </body>
    </html>
  );
}
