import type { JobExperience } from "lib/types";
import { FC } from "react";
import Controls from "./Controls";
import ExperienceCard from "./ExperienceCard";

const jobs: JobExperience[] = [
  {
    startDate: { year: 2020, month: "January" },
    endDate: { year: 2020, month: "January" },
    companyName: "Acko",
    companyImageUrl: "",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit",
    jobTitle: "Software Developer 2",
  },
  {
    startDate: { year: 2020, month: "January" },
    endDate: { year: 2020, month: "January" },
    companyName: "Acko",
    companyImageUrl: "",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit",
    jobTitle: "Software Developer 2",
  },
  {
    startDate: { year: 2020, month: "January" },
    endDate: { year: 2020, month: "January" },
    companyName: "Uolo",
    companyImageUrl: "",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit",
    jobTitle: "Software Developer 2",
  },
];

const Experiences: FC<{ hasControls?: boolean }> = ({ hasControls = true }) => {
  return (
    <section>
      <div className="flex justify-between">
        <h2 className="text-xl font-semibold capitalize">Work Experiences</h2>
        {hasControls && <Controls />}
      </div>
      <ul className="mt-5 flex flex-col gap-6">
        {jobs.map((job, index) => (
          <ExperienceCard index={index} key={index} {...job} />
        ))}
      </ul>
    </section>
  );
};

export default Experiences;
