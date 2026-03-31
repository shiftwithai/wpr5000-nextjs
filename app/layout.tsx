import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";
import { cookies } from "next/headers";
import "./globals.css";
import { LocaleProvider, type LocaleKey } from "../components/LocaleContext";

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "WPR5000 Industrial Tool Changer - Stop Production Line Delays",
  description: "WPR5000 delivers 3-second tool changes with fail-safe locking. Trusted by automotive and aerospace leaders worldwide.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const localeCookie = cookieStore.get('locale')?.value;
  const locale: LocaleKey = (localeCookie === 'fr-CA' ? 'fr-CA' : 'en') as LocaleKey;

  return (
    <html lang={locale}>
      <body className={`${poppins.variable} antialiased`}>
        <LocaleProvider locale={locale}>
          {children}
        </LocaleProvider>
        <Script src="/hotspots.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
