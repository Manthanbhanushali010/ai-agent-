import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TRPCProvider } from "@/components/providers/trpc-provider";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Meet AI - AI Agent Video Platform",
  description: "Modern SaaS platform for scheduling and conducting AI-powered video calls with intelligent agents. Built with Next.js 15, TypeScript, and cutting-edge technologies.",
  keywords: [
    "AI agents",
    "video calling", 
    "SaaS platform",
    "Next.js",
    "TypeScript",
    "full-stack",
    "modern web app"
  ],
  authors: [{ name: "Manthan Bhanushali" }],
  creator: "Manthan Bhanushali",
  openGraph: {
    title: "Meet AI - AI Agent Video Platform",
    description: "Modern SaaS platform for AI-powered video calls with intelligent agents",
    url: process.env.NEXT_PUBLIC_BETTER_AUTH_URL,
    siteName: "Meet AI",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Meet AI - AI Agent Video Platform"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Meet AI - AI Agent Video Platform", 
    description: "Modern SaaS platform for AI-powered video calls with intelligent agents",
    creator: "@manthanbhanushali", // Update with your Twitter handle
    images: ["/og-image.png"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Add if you have one
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        <TRPCProvider>
          {children}
          <Toaster />
        </TRPCProvider>
      </body>
    </html>
  );
} 