import type { JobExperience } from "lib/types";
import { FC } from "react";
import ControlsExperienceCard from "./ControlsExperienceCard";

interface Props extends JobExperience {
  index?: number; // this is use to generate border color
}

const colors = [
  "border-purple-500",
  "border-green-500",
  "border-yellow-500",
  "border-blue-500",
  "border-orange-500",
  "border-red-500",
];

const ExperienceCard: FC<Props> = ({
  index,
  startDate,
  endDate,
  company,
  companyUrl,
  description,
  jobTitle,
}) => {
  const borderCSS =
    index !== undefined
      ? colors[index % (colors.length - 1)]
      : "border-green-500";

  return (
    <li className="flex w-full flex-col gap-4 md:flex-row">
      <div className="flex w-full gap-2">
        <div className="flex flex-col justify-between text-center text-sm">
          <span className="w-[66px]">{endDate}</span>
          <span className="w-[66px]">{startDate}</span>
        </div>
        <div
          className={`flex gap-2 rounded-md border-l-2 ${borderCSS} max-w-md bg-white p-5 drop-shadow-md`}
        >
          <div className="flex flex-col gap-2">
            <div className="flex flex-col text-gray-900">
              <span className="text-sm text-gray-700">Company</span>
              <span className="">{company}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-gray-700">Job Title</span>
              <span className="">{jobTitle}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-gray-700">Job Description</span>
              <span className="max-w-sm">{description}</span>
            </div>
          </div>
          <div className="h-14 w-14 flex-shrink-0 overflow-hidden rounded-full bg-yellow-200">
            {companyUrl}
          </div>
        </div>
      </div>
      <ControlsExperienceCard />
    </li>
  );
};

export default ExperienceCard;
