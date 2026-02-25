import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "이상무 | Backend & Product Engineer",
  description:
    "이상무 포트폴리오 - 개발 철학과 대표 프로젝트를 소개하는 다크 미니멀 포트폴리오 웹사이트",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">{children}</body>
    </html>
  );
}
