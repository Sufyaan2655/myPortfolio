import LabelSection from "@/components/sections/label-section";
import { TCMSStackItem } from "@/types/cms/stack";
import Image from "next/image";

type Props = {
  stackItems: TCMSStackItem[];
};

const TechStack = (props: Props) => {
  const { stackItems } = props;

  return (
    <LabelSection
      label="Tech Stack"
      className="min-h-full"
      wrapperClassname="p-4 grow"
    >
      <div className="flex items-center flex-wrap gap-2">
        {stackItems.map((item) => (
          <div
            key={item.id}
            className="flex size-12 grow sm:grow-0 items-center justify-center border rounded-lg hover:bg-accent hover:border-primary hover:scale-110 transition-all duration-200 cursor-pointer group"
            title={item.title}
          >
            <Image
              src={item.logo.url}
              alt={item.title}
              width={30}
              height={30}
              unoptimized
              className="group-hover:scale-110 transition-transform duration-200"
            />
          </div>
        ))}
      </div>
    </LabelSection>
  );
};

export default TechStack;
