import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.lolelink.com"),
  title: {
    default: "Lolelink",
    template: "%s | Lolelink",
  },
  description:
    "Your AI-Powered Business Partner for Smarter Growth",
  keywords: [
    "Lolelink",
    "link in bio",
    "link sharing",
    "creator tools",
    "micro landing pages",
  ],
  icons: {
    icon: "/logoicon.webp",
    shortcut: "/logoicon.webp",
    apple: "/logoicon.webp",
  },
  openGraph: {
    type: "website",
    url: "https://www.lolelink.com",
    title: "Lolelink",
    description:
      "Your AI-Powered Business Partner for Smarter Growth",
    siteName: "Lolelink",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Lolelink",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lolelink",
    description:
      "Your AI-Powered Business Partner for Smarter Growth",
    images: ["/og.jpg"],
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${sora.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
