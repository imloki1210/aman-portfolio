import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aman Singh — Software Developer",
  description:
    "Portfolio of Aman Singh, a Software Developer specialising in React.js and Next.js, based in Surat, Gujarat.",
  keywords: [
    "Aman Singh", "Software Developer", "React.js", "Next.js",
    "Frontend Developer", "Portfolio", "Surat",
  ],
  authors: [{ name: "Aman Singh" }],
  openGraph: {
    title: "Aman Singh — Software Developer",
    description: "Frontend developer with expertise in React.js, Next.js, and modern web technologies.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
