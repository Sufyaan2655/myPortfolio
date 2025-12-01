"use client";

import { usePathname } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";

type Props = {
  children: ReactNode;
};

const PageTransition = ({ children }: Props) => {
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    // Scroll to top immediately without animation to prevent jump
    window.scrollTo({ top: 0, behavior: "auto" });
    
    setIsTransitioning(true);
    
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <div
      className={`transition-opacity duration-200 ease-out ${
        isTransitioning ? "opacity-0" : "opacity-100"
      }`}
    >
      {children}
    </div>
  );
};

export default PageTransition;

