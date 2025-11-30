import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  generateProductSchema,
  generateSoftwareApplicationSchema,
} from "@/helpers/schema-org";
import { CMSProductPricingTypeEnum, TCMSProduct } from "@/types/cms/product";
import { projectTechStacks } from "@/data/mock-cms-data";
import { getImagePath } from "@/helpers/image-path";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { LuExternalLink, LuGitBranch, LuPlay } from "react-icons/lu";

type Props = {
  product: TCMSProduct;
};

const ProductCard = (props: Props) => {
  const { product } = props;
  
  const techStack = projectTechStacks[product.id] || [];

  // Generate subtle background colors for tech stack tags
  const getTechTagColor = (index: number) => {
    const colors = [
      "bg-blue-50 dark:bg-blue-950/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800",
      "bg-purple-50 dark:bg-purple-950/30 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800",
      "bg-green-50 dark:bg-green-950/30 text-green-700 dark:text-green-300 border-green-200 dark:border-green-800",
      "bg-orange-50 dark:bg-orange-950/30 text-orange-700 dark:text-orange-300 border-orange-200 dark:border-orange-800",
      "bg-pink-50 dark:bg-pink-950/30 text-pink-700 dark:text-pink-300 border-pink-200 dark:border-pink-800",
      "bg-cyan-50 dark:bg-cyan-950/30 text-cyan-700 dark:text-cyan-300 border-cyan-200 dark:border-cyan-800",
    ];
    return colors[index % colors.length];
  };

  return (
    <article
      key={product.id}
      className="group flex flex-col border rounded-lg hover:shadow-md hover:border-primary/20 hover:scale-105 transition-all duration-200 bg-card cursor-pointer overflow-hidden"
    >
      <div className="w-full h-56 overflow-hidden transition-transform duration-200 group-hover:scale-105 flex items-center justify-center">
        <Image
          src={getImagePath(product.logo.url)}
          alt={product.logo?.alt || product.title}
          width={400}
          height={224}
          className="object-cover w-full h-full"
          unoptimized
          priority={product.id === "1"}
        />
      </div>
      <div className="p-4 flex flex-col gap-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-lg font-semibold font-heading group-hover:text-primary transition-colors">
            {product.title}
          </h3>
          <div className="flex items-center gap-2 shrink-0">
            {product.liveLink && (
              <Link
                href={product.liveLink}
                target="_blank"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <LuExternalLink className="w-4 h-4" />
              </Link>
            )}
            {product.sourceLink && (
              <Link
                href={product.sourceLink}
                target="_blank"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <LuGitBranch className="w-4 h-4" />
              </Link>
            )}
            {product.videoLink && (
              <Link
                href={product.videoLink}
                target="_blank"
                className="text-muted-foreground hover:text-foreground transition-colors"
                title="Watch Demo"
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="5" width="18" height="14" rx="4" />
                  <polygon points="10,8 10,16 16,12" fill="none" stroke="currentColor" />
                </svg>
              </Link>
            )}
          </div>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">{product.description}</p>
        {techStack.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground group-hover:bg-muted/80 group-hover:text-foreground/80 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>

      <Script
        id={"schema-product-" + product.id}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateProductSchema(product)),
        }}
      />

      <Script
        id={"schema-software-" + product.id}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateSoftwareApplicationSchema(product)),
        }}
      />
    </article>
  );
};

export default ProductCard;

const pricingTypeLabel = {
  [CMSProductPricingTypeEnum.FREEMIUM]: "Fremium",
  [CMSProductPricingTypeEnum.OPEN_SOURCE]: "Open-Source",
  [CMSProductPricingTypeEnum.PAID]: "Paid",
};
