import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.lauthentique.com/",
      lastModified: new Date(),
    },
    {
      url: "https://www.lauthentique.com/#menu",
      lastModified: new Date(),
    },
    {
      url: "https://www.lauthentique.com/#privatisation",
      lastModified: new Date(),
    },
  ];
}
