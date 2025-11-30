import envConfig from "@/common/env-config";
import { fetchPages } from "@/services/cms/page";
import { MetadataRoute } from "next";

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  const pagesRes = await fetchPages();
  const baseUrl = envConfig.BASE_URL || (process.env.GITHUB_PAGES === "true" 
    ? `https://sufyaan2655.github.io${process.env.GITHUB_PAGES_BASE_PATH || "/myPortfolio"}`
    : "http://localhost:3000");
  
  const pagesSitemap: MetadataRoute.Sitemap = pagesRes.map((page) => ({
    url:
      page.slug === "home"
        ? baseUrl
        : `${baseUrl}/${page.slug}`,
    lastModified: page.updatedAt,
    changeFrequency: "daily",
  }));

  return [...pagesSitemap];
};

export default sitemap;
