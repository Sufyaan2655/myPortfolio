import WorkCard from "@/components/cards/work-card";
import { fetchWorks } from "@/services/cms/work";
import Link from "next/link";
import paths from "@/router/paths";
import { LuArrowRight } from "react-icons/lu";

type Props = {};

const ExperienceSection = async (props: Props) => {
  const works = await fetchWorks();

  return (
    <>
      <div className="flex items-center justify-between mb-12">
        <h1 className="text-3xl font-bold font-heading">Experience</h1>
        <Link
          href={paths.works}
          className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
        >
          View All Experience
          <LuArrowRight className="w-4 h-4" />
        </Link>
      </div>
      <div className="max-w-3xl mx-auto">
        <div className="p-4 bg-secondary rounded-2xl border">
          <div className="bg-background rounded-2xl p-4">
            <div className="relative space-y-3">
              {works.map((work, index) => (
                <WorkCard key={work.id} data={work} variant="card" isLast={index === works.length - 1} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExperienceSection;

