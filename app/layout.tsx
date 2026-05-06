import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "Ravindra Pharma Distributors | Reliable Pharmaceutical Distribution",
  description: "Delivering high-quality healthcare products with consistency, integrity, and 52+ years of experience in pharmaceutical distribution.",
  icons: {
    icon: "/images/logo-rpd.png",
    apple: "/images/logo-rpd.png",
  },
  openGraph: {
    title: "Ravindra Pharma Distributors",
    description: "Delivering high-quality healthcare products with 52+ years of experience.",
    images: [
      {
        url: "/images/logo-rpd.png",
        width: 1200,
        height: 630,
        alt: "Ravindra Pharma Distributors Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ravindra Pharma Distributors",
    description: "Delivering high-quality healthcare products with 52+ years of experience.",
    images: ["/images/logo-rpd.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col font-sans" suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-1 flex flex-col">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
