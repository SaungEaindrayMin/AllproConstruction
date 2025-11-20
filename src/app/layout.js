import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";

import { Nav } from "@/components/Layout/Nav";
import { Footer } from "@/components/Layout/Footer";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Allpro",
  description: "Construction services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
