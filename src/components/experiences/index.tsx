import useJobExperiences from "lib/hooks/useJobExperiences";
import { FC } from "react";
import Controls from "./Controls";
import ExperienceCard from "./ExperienceCard";

const Experiences: FC<{ hasControls?: boolean }> = ({ hasControls = true }) => {
  const { jobExperiencesData } = useJobExperiences();
  return (
    <section>
      <div className="flex justify-between">
        <h2 className="text-xl font-semibold capitalize">Work Experiences</h2>
        {hasControls && <Controls />}
      </div>
      <ul className="mt-5 flex flex-col gap-6">
        {jobExperiencesData?.jobExperiences.map((job, index) => (
          <ExperienceCard
            hasControls={hasControls}
            index={index}
            key={index}
            {...job}
          />
        ))}
      </ul>
    </section>
  );
};

export default Experiences;
