import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "../components/Nav";
import { getServerSession } from "next-auth";
import { Toaster } from "@components/ui/toaster";
import Provider from "@components/Provider";
import { authOptions } from "@app/utils/auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chronicles Square | Home",
  description:
    "A repository of how to's and tutorials for web development, software engineering, and more.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <head>
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        <Provider session={session}>
        <main id="example">
          <Nav />
          {children}
          <Toaster />
        </main>
        </Provider>
      </body>
    </html>
  );
}
