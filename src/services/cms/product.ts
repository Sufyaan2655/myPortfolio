import { TCMSProduct } from "@/types/cms/product";
import { mockProducts } from "@/data/mock-cms-data";

export async function fetchProducts() {
  // Return mock data instead of fetching from CMS
  return mockProducts;
}
