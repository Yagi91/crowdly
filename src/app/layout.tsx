import type { Metadata } from "next";
import { Krona_One, Titillium_Web } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";

const kronaOne = Krona_One({
  variable: "--font-krona-one",
  subsets: ["latin"],
  weight: "400",
});

const titilliumWeb = Titillium_Web({
  variable: "--font-titillium-web",
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "900"],
});

export const metadata: Metadata = {
  title: "Crowdly",
  description: "Fund the next big project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${kronaOne.variable} ${titilliumWeb.variable} antialiased max-w-[1440px] antialised mx-auto`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
