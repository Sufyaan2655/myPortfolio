import { TCMSWork } from "@/types/cms/work";
import { mockWorks } from "@/data/mock-cms-data";

export async function fetchWorks() {
  // Return mock data instead of fetching from CMS
  return mockWorks;
}
