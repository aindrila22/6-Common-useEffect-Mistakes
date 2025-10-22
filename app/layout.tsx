import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "6 Common useEffect Mistakes - React Tutorial",
  description: "Learn from common React useEffect mistakes with interactive examples and solutions. Practice MCQ rounds on MockExperts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} font-sans antialiased`}
        style={{ fontFamily: 'var(--font-poppins)' }}
      >
        {children}
      </body>
    </html>
  );
}
