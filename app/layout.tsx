import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "아동 프로그램 모아보기",
  description: "복지관과 가족지원센터의 아동 치료, 체험, 검사 프로그램을 모아봅니다."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
