import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import css from "../../styles/mdx.module.sass";

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "WPR5000 Industrial Tool Changer - Stop Production Line Delays",
  description: "WPR5000 delivers 3-second tool changes with fail-safe locking. Trusted by automotive and aerospace leaders worldwide.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <main className={css.page}>{children}</main>
        <Script src="/hotspots.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
