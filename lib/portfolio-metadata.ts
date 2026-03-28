import type { Metadata } from "next";

const SITE_NAME = "이상무 포트폴리오";
const OG_IMAGE = "/opengraph-image";
const TWITTER_IMAGE = "/twitter-image";

export function createPortfolioMetadata(title: string, description: string): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      locale: "ko_KR",
      siteName: SITE_NAME,
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [TWITTER_IMAGE],
    },
  };
}
