import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Empire Results | Next-Gen Digital Marketing Agency",
  description: "Empire Results is a next-gen social media and digital marketing agency specializing in lead generation, content production, and organic social growth for service-based businesses.",
  keywords: [
    "Digital Marketing Agency",
    "Lead Generation",
    "Social Media Marketing",
    "Content Production",
    "Instagram Growth",
    "TikTok Marketing",
    "Local SEO",
    "AI Marketing Agency",
    "Small Business Marketing",
    "Empire Results"
  ],
  authors: [{ name: "Mahenoor Salat" }],
  creator: "Mahenoor Salat",
  robots: "index, follow",
  openGraph: {
    title: "Empire Results | Next-Gen Digital Marketing Agency",
    description: "Drive real results with Empire Results. Expert digital marketing for small to mid-sized businesses using AI, organic growth, and paid media.",
    url: "https://www.empireresults.com/",
    type: "website",

  },
  twitter: {
    card: "summary_large_image",
    title: "Empire Results | Next-Gen Digital Marketing Agency",
    description: "Social media growth, AI-powered content, lead generation, and branding all under one roof.",
    creator: "@EmpireResults",
   
  },
  metadataBase: new URL("https://www.empireresults.com")
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
