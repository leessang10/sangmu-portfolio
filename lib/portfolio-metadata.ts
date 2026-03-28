import type { Metadata } from "next";

const SITE_NAME = "이상무 포트폴리오";

export function createPortfolioMetadata(title: string, description: string): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      siteName: SITE_NAME,
    },
    twitter: {
      title,
      description,
    },
  };
}
