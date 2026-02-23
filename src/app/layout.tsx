import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Chatbot from "../components/Chatbot";
import MobileBottomNav from "../components/MobileBottomNav";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Walugogo Vocational High School | Uganda's Premier Vocational Learning Hub",
  description:
    "Walugogo Vocational High School combines rigorous academics with practical vocational skilling in Iganga, Uganda. 100% pass rate. Zero failure rate. Where every student succeeds.",
  keywords: "vocational school Uganda, technical education, carpentry welding plumbing, practical skills, secondary education, Iganga Uganda",
  authors: [{ name: "Walugogo Vocational High School" }],
  creator: "Walugogo Vocational High School",
  metadataBase: new URL("https://walugogo-vhs.edu.ug"),
  alternates: {
    canonical: "https://walugogo-vhs.edu.ug",
  },
  icons: {
    icon: "/Walugogologo-Photoroom.png",
    apple: "/Walugogologo-Photoroom.png",
    shortcut: "/Walugogologo-Photoroom.png",
  },
  openGraph: {
    title: "Walugogo Vocational High School | Uganda's Premier Vocational Hub",
    description: "100% pass rate. Zero failure rate. Where every student succeeds.",
    type: "website",
    locale: "en_US",
    siteName: "Walugogo Vocational High School",
    url: "https://walugogo-vhs.edu.ug",
    images: {
      url: "/Walugogologo-Photoroom.png",
      width: 1200,
      height: 630,
      alt: "Walugogo Vocational High School Logo",
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "Walugogo Vocational High School",
    description: "100% pass rate. Zero failure rate. Where every student succeeds.",
    images: "/Walugogologo-Photoroom.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <meta name="google-adsense-account" content="ca-pub-2545805112727180" />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2545805112727180"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-blue-900 transition-colors duration-300`}>
        <div className="min-h-screen relative overflow-x-hidden pb-20 lg:pb-0">
          {/* Animated background elements */}
          <div className="fixed inset-0 opacity-20 dark:opacity-10 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-400 rounded-full filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
          </div>
          <div className="relative z-10">
            {children}
          </div>
          <Chatbot />
        </div>
        {/* Mobile Bottom Navigation - Only visible on mobile */}
        <div className="lg:hidden">
          <MobileBottomNav />
        </div>
      </body>
    </html>
  );
}
