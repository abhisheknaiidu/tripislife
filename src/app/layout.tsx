import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Anton } from "next/font/google";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const areaFont = localFont({
  src: "./fonts/Area/Area-Regular.otf",
  variable: "--font-area",
});

const anton = Anton({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-anton',
});

const als = localFont({
  src: "./fonts/ALS/alsscrp.ttf",
  variable: "--font-als",
});

const anth = localFont({
  src: "./fonts/Anth/anth-regular.ttf",
  variable: "--font-anth",
});

const circular = localFont({
  src: "./fonts/Circular/circular-medium.ttf",
  variable: "--font-circular",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${areaFont.variable} ${anton.variable} ${als.variable} ${anth.variable} ${circular.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
