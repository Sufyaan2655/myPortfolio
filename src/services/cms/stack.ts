import { TCMSStack } from "@/types/cms/stack";
import { mockStacks } from "@/data/mock-cms-data";

export async function fetchStacks() {
  // Return mock data instead of fetching from CMS
  return mockStacks;
}
