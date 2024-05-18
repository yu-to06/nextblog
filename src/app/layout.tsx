import type {Metadata} from "next";
import "./globals.css";
import Header from "./Header";
import Footer from "./Footer";
import {Suspense} from "react";
import Loading from "./loading";

export const metadata: Metadata = {
  title: "Next13 blog",
  description: "Learning Next.js version 13",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ja'>
      <body className='container mx-auto bg-slate-700 text-slate-50'>
        <Header />
        <Suspense fallback={<Loading />}>{children}</Suspense>
        <Footer />
      </body>
    </html>
  );
}
