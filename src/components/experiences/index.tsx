import Info from "components/common/Info";
import useJobExperiences from "lib/hooks/useJobExperiences";
import { FC } from "react";
import Controls from "./Controls";
import ExperienceCard from "./ExperienceCard";

const Experiences: FC<{ hasControls?: boolean }> = ({ hasControls = true }) => {
  const { jobExperiencesData } = useJobExperiences();

  if (!jobExperiencesData) return <div>Loading</div>;
  if (!hasControls && !jobExperiencesData.jobExperiences)
    return <div className="hidden" />;

  return (
    <section>
      <div className="flex justify-between">
        <h2 className="text-xl font-semibold capitalize">Work Experiences</h2>
        {hasControls && <Controls />}
      </div>
      {jobExperiencesData.jobExperiences?.length ?? 0 > 0 ? (
        <ul className="mt-5 flex flex-col gap-6">
          {jobExperiencesData.jobExperiences?.map((job, index) => (
            <ExperienceCard
              hasControls={hasControls}
              index={index}
              key={index}
              {...job}
            />
          ))}
        </ul>
      ) : (
        <Info>Please add your job experience</Info>
      )}
    </section>
  );
};

export default Experiences;
