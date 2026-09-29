import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { TeamCredits } from "@/components/TeamCredits";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sổ Tay Mục Từ - Ngôn Ngữ Học Tiếng Việt",
  description: "Tra cứu và tìm hiểu các khái niệm, quy tắc cấu tạo từ và từ vựng học tiếng Việt.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="vi"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col relative">
        {children}
        <TeamCredits />
      </body>
    </html>
  );
}
