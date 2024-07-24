import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackgroundAnimation from "@/components/BackgroundAnimation";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Maya Rahman - Digital Marketing Expert",
  description:
    "Maya Rahman's personal portfolio showcasing expertise in digital marketing, SEO, content creation, and social media strategy. Explore Maya's projects, experience, and contact information.",
  keywords:
    "Maya Rahman, digital marketing, SEO, content creation, social media strategy, marketing portfolio, digital marketing expert",
  author: "Maya Rahman",
  viewport: "width=device-width, initial-scale=1.0",
  charset: "UTF-8",
  robots: "index, follow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="min-h-screen">
      <body className={inter.className}>
        <Header />
        {children}
        <BackgroundAnimation />
        <Footer />
      </body>
    </html>
  );
}
