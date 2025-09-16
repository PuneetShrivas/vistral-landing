import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider} from "next-themes"
import { Analytics } from "@vercel/analytics/next"
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
import localFont from "next/font/local";

const outfit = localFont({
  src: [
    {
      path: "./fonts/outfit/Outfit-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/outfit/Outfit-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/outfit/Outfit-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/outfit/Outfit-Light.ttf",
      weight: "300",
      style: "normal",
    }
  ],
  variable: "--font-outfit", // CSS variable for Tailwind integration
});
export const metadata: Metadata = { 
  title: "Vistral – Edge-Ready Computer Vision for Industry & Enterprise",
  description:
    "Vistral delivers production-ready computer vision solutions for manufacturing, renewable energy, warehousing, and more — optimized for edge devices, privacy-first, and proven ROI.",
  keywords: [
    "computer vision",
    "edge AI",
    "industrial AI",
    "privacy-first AI",
    "manufacturing automation",
    "renewable energy AI",
    "quality control automation",
    "predictive maintenance",
    "edge deployment",
    "safety compliance",
  ],
  authors: [{ name: "Vistral" }],
  metadataBase: new URL("https://vistral.ai"),
  openGraph: {
    title: "Vistral – Edge-Ready Computer Vision for Industry & Enterprise",
    description:
      "Production-ready computer vision for manufacturing, renewable energy, and enterprise — optimized for edge, privacy-first, and proven ROI.",
    url: "https://vistral.ai",
    siteName: "Vistral",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Vistral Dashboard",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vistral – Edge-Ready Computer Vision for Industry & Enterprise",
    description:
      "Deploy computer vision at the edge. Vistral builds privacy-first, production-ready AI for industry and enterprise with measurable ROI.",
    images: ["/og-image.webp"],
    creator: "@vistral_ai", // update if you secure the handle
  },
  themeColor: "#0F172A", // Vistral dark slate brand tone
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} antialiased`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
