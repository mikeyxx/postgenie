import Head from "next/head";
import "@/styles/globals.css";
import { Header } from "@/components";

export const metadata = {
  title: "PostGenie Blog",
  description: "Discover a World of Insights - Your Gateway to Engaging Blogs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>PostGenie Blog</title>
      </Head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
