import ProductCard from "@/components/cards/product-card";
import { fetchProducts } from "@/services/cms/product";
import Link from "next/link";
import paths from "@/router/paths";
import { LuArrowRight } from "react-icons/lu";

type Props = {};

const FeaturedProjects = async (props: Props) => {
  const products = await fetchProducts();
  const featuredProducts = products.slice(0, 2); // Show first 2 projects

  return (
    <>
      <div className="flex items-center justify-between mb-12">
        <h1 className="text-3xl font-bold font-heading">Featured Projects</h1>
        <Link
          href={paths.products}
          className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
        >
          View All Projects
          <LuArrowRight className="w-4 h-4" />
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default FeaturedProjects;

