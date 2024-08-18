import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import PageNavBar from "./components/Navbar/Navbar";
import { Providers } from "./providers";
import type { Viewport } from "next";
import PageFooter from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  // Also supported by less commonly used
  // interactiveWidget: 'resizes-visual',
};

export const metadata: Metadata = {
  title: "Interfuse",
  description: "C based progamming language powered by LLVM, made for fun",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <PageNavBar />
          <main className="text-foreground p-2">{children}</main>
        </Providers>

        <PageFooter />
      </body>
    </html>
  );
}
