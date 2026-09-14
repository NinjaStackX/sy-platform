import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import "@/lib/i18n";
import { DataProvider } from "@/context/DataContext";

import { I18nProvider } from "@/components/I18nProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sy Platform",
  description: "وجهتك الأولى للمحتوى العلمي و التطبيقي",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <I18nProvider>
          <DataProvider>
            <div className="min-h-screen bg-white">{children}</div>
          </DataProvider>
        </I18nProvider>
        <Footer />
      </body>
    </html>
  );
}
