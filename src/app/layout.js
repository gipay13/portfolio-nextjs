import { Anton, Six_Caps, Work_Sans } from "next/font/google";
import "./globals.css";

const work = Work_Sans({
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: "--font-work",
});

const anton = Anton({
  subsets: ["latin"],
  weight: ['400'],
  variable: "--font-anton",
});

const sixcaps = Six_Caps({
  subsets: ["latin"],
  weight: ['400'],
  variable: "--font-six-caps",
});

export const metadata = {
  title: "Portfolio - Ghifary Anshar Ariestiand",
  description: "Perkenalan saya Ghifary Anshar Ariestiand. Fullstack Web Developer. Apa yang saya gunakan? Favorit saya adalah Laravel, NextJS, Tailwind, dan Chakra UI. Terakhir, saya telah menyelesaikan lebih dari 3 proyek.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${work.variable} ${sixcaps.variable} ${anton.variable}`}>
      <body className="font-work antialiased">
        {children}
      </body>
    </html>
  );
}
