import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import { Nav } from "@/components/Layout/Nav";
import { Footer } from "@/components/Layout/Footer";
import meta from "../../public/images/metaImage.jpg";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Allpro | Construction Services",
  description:
    "Allpro provides professional construction, renovation, architecture, and site planning services.",
  keywords: [
    "Allpro Construction Bangkok",
    "Allpro Bangkok",
    "Allpro Renovation Bangkok",
    "Bangkok Construction Company",
    "Bangkok Renovation Services",
    "Bangkok Architecture Services",
    "Construction Services Thailand",
    "Renovation Services Thailand",
    "Home Renovation Bangkok",
    "Building Contractor Bangkok",
    "General Contractor Bangkok",
    "Interior Design Bangkok",
    "Construction Management Bangkok",
    "House Construction Bangkok",
    "Office Renovation Bangkok",
    "Retail Shop Renovation Bangkok",
    "Property Development Bangkok",
    "Building Maintenance Bangkok",
    "Thailand Construction Experts",
    "Thailand Renovation Experts",
    "Professional Construction Services",
    "Building Services Bangkok",
    "Exterior Renovation Bangkok",
    "Interior Renovation Bangkok",
    "Design and Build Bangkok",
    "Allpro",
  ],

  authors: [{ name: "Allpro Team" }],
  creator: "Allpro",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Allpro | Construction And Renovation Services",
    description:
      "Professional construction, renovation, and architecture services for all types of projects.",
    url: "https://yourwebsite.com",
    siteName: "Allpro",
    images: [
      {
        url: { meta },
        width: 1200,
        height: 630,
        alt: "Allpro Construction And Renovation Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
