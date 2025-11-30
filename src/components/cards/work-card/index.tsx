"use client";

import { generateOrganizationSchema } from "@/helpers/schema-org";
import { getImagePath } from "@/helpers/image-path";
import { TCMSWork } from "@/types/cms/work";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { useState } from "react";

type Props = {
  data: TCMSWork;
  isLast?: boolean;
};

const WorkCard = (props: Props) => {
  const { data, isLast = false } = props;
  const [imageError, setImageError] = useState(false);

  // Get first letter of company for fallback icon
  const companyInitial = data.company.charAt(0).toUpperCase();

  return (
    <article className="relative flex gap-4 pb-8 last:pb-0">
      {/* Timeline dot and icon */}
      <div className="relative shrink-0">
        {!isLast && (
          <div className="absolute left-1/2 top-12 -translate-x-1/2 w-0.5 bg-border bottom-0" />
        )}
        {data.companyUrl ? (
          <Link href={data.companyUrl} target="_blank" className="block">
            <div className="relative w-12 h-12 rounded-full bg-secondary flex items-center justify-center border-2 border-background z-10 hover:bg-secondary/80 transition-colors cursor-pointer">
              {data.logo && !imageError ? (
                <Image
                  src={getImagePath(data.logo.url)}
                  alt={data.logo.alt || data.company}
                  width={data.logo.width || 32}
                  height={data.logo.height || 32}
                  className="object-contain w-8 h-8"
                  unoptimized
                  onError={() => setImageError(true)}
                />
              ) : (
                <span className="text-lg font-semibold text-foreground">{companyInitial}</span>
              )}
            </div>
          </Link>
        ) : (
          <div className="relative w-12 h-12 rounded-full bg-secondary flex items-center justify-center border-2 border-background z-10">
            {data.logo && !imageError ? (
              <Image
                src={getImagePath(data.logo.url)}
                alt={data.logo.alt || data.company}
                width={data.logo.width || 32}
                height={data.logo.height || 32}
                className="object-contain w-8 h-8"
                unoptimized
                onError={() => setImageError(true)}
              />
            ) : (
              <span className="text-lg font-semibold text-foreground">{companyInitial}</span>
            )}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0 pb-2">
        <div className="flex items-start justify-between gap-2 mb-1">
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold font-heading mb-0.5">
              {data.companyUrl ? (
                <Link href={data.companyUrl ?? "#"} target="_blank" className="hover:text-primary transition-colors">
                  {data.company}
                </Link>
              ) : (
                data.company
              )}
            </h3>
            <h4 className="text-base font-medium text-muted-foreground font-heading mb-1">
              {data.position}
            </h4>
          </div>
        </div>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-sm text-muted-foreground">
            {data.startYear} {data.endYear ? `- ${data.endYear}` : "- Present"}
          </span>
        </div>
        {data.description && (
          <p className="text-sm text-muted-foreground leading-relaxed">{data.description}</p>
        )}
      </div>

      <Script
        id={"schema-org-" + data.id}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateOrganizationSchema(data)),
        }}
      />
    </article>
  );
};

export default WorkCard;
