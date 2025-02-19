import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.lauthentique-rueilmalmaison.fr/",
      lastModified: new Date(),
    },
    {
      url: "https://www.lauthentique-rueilmalmaison.fr/#menu",
      lastModified: new Date(),
    },
    {
      url: "https://www.lauthentique-rueilmalmaison.fr/#galerie",
      lastModified: new Date(),
    },
    {
      url: "https://www.lauthentique-rueilmalmaison.fr/#contact",
      lastModified: new Date(),
    },
    {
      url: "https://www.lauthentique-rueilmalmaison.fr/#privatisation",
      lastModified: new Date(),
    },
  ];
}
