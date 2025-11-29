import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

type Props = {
  label: string | ReactNode;
  children: ReactNode;
  wrapperClassname?: string;
} & React.JSX.IntrinsicElements["section"];

const LabelSection = (props: Props) => {
  const { children, label, wrapperClassname, ...others } = props;
  return (
    <section
      {...others}
      className={cn(
        "p-4 bg-secondary rounded-2xl flex flex-col border",
        others.className
      )}
    >
      <h2 className={cn(
        "mb-3 font-heading",
        typeof label === "string" && "text-muted-foreground text-sm"
      )}>
        {label}
      </h2>
      <div className={cn("bg-background rounded-2xl", wrapperClassname)}>
        {children}
      </div>
    </section>
  );
};

export default LabelSection;
