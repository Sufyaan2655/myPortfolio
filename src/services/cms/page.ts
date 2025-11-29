import { TCMSPage } from "@/types/cms/page";
import { mockPages } from "@/data/mock-cms-data";

export async function fetchPages() {
  // Return mock data instead of fetching from CMS
  return mockPages;
}

export async function fetchPage(slug: string) {
  // Return mock data instead of fetching from CMS
  const page = mockPages.find((p) => p.slug === slug);
  return page || null;
}
