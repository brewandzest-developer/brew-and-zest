import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://brewandzest.in",
      lastModified: new Date(),
    },

    {
      url: "https://brewandzest.in/shop",
      lastModified: new Date(),
    },

    {
      url: "https://brewandzest.in/about",
      lastModified: new Date(),
    },

    {
      url: "https://brewandzest.in/contact",
      lastModified: new Date(),
    },
  ];
}