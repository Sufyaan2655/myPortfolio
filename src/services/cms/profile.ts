import { TCMSProfile } from "@/types/cms/profile";
import { mockProfile } from "@/data/mock-cms-data";

export async function fetchProfile() {
  // Return mock data instead of fetching from CMS
  return mockProfile;
}
