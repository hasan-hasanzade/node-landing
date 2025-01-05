import type { Metadata } from "next";
import localFont from "next/font/local";
import { AbstractIntlMessages, NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { Locale, routing } from "@/i18n/routing";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../globals.css";

const interRegular = localFont({
  src: [
    { path: "../fonts/InterRegular.woff2", weight: "400", style: "normal" },
    { path: "../fonts/InterRegular.woff", weight: "400", style: "normal" },
  ],
  variable: "--font-inter-regular",
});

const interMedium = localFont({
  src: [
    { path: "../fonts/InterMedium.woff2", weight: "500", style: "normal" },
    { path: "../fonts/InterMedium.woff", weight: "500", style: "normal" },
  ],
  variable: "--font-inter-medium",
});

const interSemiBold = localFont({
  src: [
    { path: "../fonts/InterSemiBold.woff2", weight: "600", style: "normal" },
    { path: "../fonts/InterSemiBold.woff", weight: "600", style: "normal" },
  ],
  variable: "--font-inter-semibold",
});

const interExtraLight = localFont({
  src: [
    { path: "../fonts/InterExtraLight.woff2", weight: "200", style: "normal" },
    { path: "../fonts/InterExtraLight.woff", weight: "200", style: "normal" },
  ],
  variable: "--font-inter-extralight",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise <{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  const messages: AbstractIntlMessages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`${interRegular.variable} ${interMedium.variable} ${interSemiBold.variable} ${interExtraLight.variable} bg-[#101317] bg-body-mobile md:bg-body bg-cover bg-no-repeat`}
      >
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
