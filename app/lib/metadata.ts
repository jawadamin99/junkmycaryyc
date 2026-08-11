import type { Metadata } from "next";
import { siteConfig } from "./site";

type MetadataInput = {
  title: string;
  description: string;
  path?: string;
};

export function buildMetadata({
  title,
  description,
  path = "/",
}: MetadataInput): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: path,
      siteName: siteConfig.name,
      type: "website",
      images: [
        {
          url: siteConfig.socialImage,
          width: 1600,
          height: 900,
          alt: `${siteConfig.name} roadside vehicle pickup`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [siteConfig.socialImage],
    },
  };
}
