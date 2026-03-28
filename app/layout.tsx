import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "이상무 | Backend & Product Engineer",
  description:
    "이상무 포트폴리오 - 가치 있는 것을 제대로 만드는 백엔드 중심 프로덕트 엔지니어",
  metadataBase: new URL("https://sangmu.dev"),
  openGraph: {
    title: "이상무 | Backend & Product Engineer",
    description:
      "가치 있는 것을 제대로 만드는 백엔드 중심 프로덕트 엔지니어. NestJS, Docker, K8s 기반 운영 가능한 구조 설계.",
    type: "website",
    locale: "ko_KR",
    siteName: "이상무 포트폴리오",
  },
  twitter: {
    card: "summary_large_image",
    title: "이상무 | Backend & Product Engineer",
    description:
      "가치 있는 것을 제대로 만드는 백엔드 중심 프로덕트 엔지니어",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="bg-[#080c12] text-slate-100 antialiased">{children}</body>
    </html>
  );
}
