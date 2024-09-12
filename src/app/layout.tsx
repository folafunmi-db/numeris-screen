import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const neueSans = localFont({
  src: [
    {
      path: "./fonts/Neue Haas Grotesk Display Pro/NeueHaasDisplayRoman.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Neue Haas Grotesk Display Pro/NeueHaasDisplayRomanItalic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/Neue Haas Grotesk Display Pro/NeueHaasDisplayMediu.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Neue Haas Grotesk Display Pro/NeueHaasDisplayMediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "./fonts/Neue Haas Grotesk Display Pro/NeueHaasDisplayBold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Neue Haas Grotesk Display Pro/NeueHaasDisplayBoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-neue-sans",
});

export const metadata: Metadata = {
  title: "Numeris",
  description: "A numeris app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${neueSans.variable} font-[family-name:var(--font-neue-sans)] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
