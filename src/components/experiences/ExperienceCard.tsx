import type { JobExperience } from "lib/types";
import { FC } from "react";
import ControlsExperienceCard from "./ControlsExperienceCard";
import Image from "next/image";
interface Props extends JobExperience {
  index?: number; // this is use to generate border color
  hasControls: boolean;
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
  id,
  index,
  startDate,
  endDate,
  companyName,
  companyImageUrl = "",
  description,
  jobTitle,
  hasControls,
}) => {
  const borderCSS =
    index !== undefined
      ? colors[index % (colors.length - 1)]
      : "border-green-500";
  return (
    <li className="flex w-full flex-col gap-4 border-b pb-3 md:flex-row md:border-none md:pb-0">
      <div className="flex w-full gap-2">
        <div className="flex flex-col justify-between text-center text-sm">
          {endDate ? (
            <span className="w-[66px]">
              {endDate.month} {endDate.year}
            </span>
          ) : (
            <span className="w-[66px]">Now</span>
          )}
          <span className="w-[66px]">
            {startDate.month} {startDate.year}
          </span>
        </div>
        <div
          className={`flex justify-between gap-2 rounded-md border-l-2 ${borderCSS} w-full bg-white p-5 drop-shadow-md`}
        >
          <div className="flex flex-col gap-2">
            <div className="flex flex-col text-gray-900">
              <span className="text-sm text-gray-700">Company</span>
              <span className="">{companyName}</span>
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
          <div className="h-14 w-14 flex-shrink-0 overflow-hidden rounded-full ">
            <Image
              style={{ width: 56, height: 56 }}
              objectFit="cover"
              className="h-[56px] w-[56px] object-contain"
              src={
                companyImageUrl.length > 0
                  ? companyImageUrl
                  : "/images/company.png"
              }
              height={56}
              width={56}
              alt="company image url"
            />
          </div>
        </div>
      </div>
      {hasControls && (
        <ControlsExperienceCard
          jobExperience={{
            id,
            companyName,
            companyImageUrl,
            description,
            endDate,
            jobTitle,
            startDate,
          }}
        />
      )}
    </li>
  );
};

export default ExperienceCard;
