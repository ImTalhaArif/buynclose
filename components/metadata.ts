// app/metadata.ts
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BuyNClose",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    url: "https://buynclose.com/",
    images: [
      {
        width: 1200,
        height: 630,
        url: "https://buynclose.com/assets/logo.png",
      },
    ],
  },
};
