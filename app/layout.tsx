import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "이상무 | Full-stack Product Engineer",
  description:
    "이상무 포트폴리오 - 문제 정의부터 구현, 배포, 운영 확인까지 다루는 개발자 포트폴리오",
  metadataBase: new URL("https://sangmu.dev"),
  openGraph: {
    title: "이상무 | Full-stack Product Engineer",
    description:
      "문제 정의부터 구현, 배포, 운영 확인까지 다루는 개발자 포트폴리오",
    type: "website",
    locale: "ko_KR",
    siteName: "이상무 포트폴리오",
  },
  twitter: {
    card: "summary_large_image",
    title: "이상무 | Full-stack Product Engineer",
    description:
      "문제 정의부터 구현, 배포, 운영 확인까지 다루는 개발자 포트폴리오",
  },
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
