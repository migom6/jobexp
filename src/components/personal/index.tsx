import usePersonalDetails from "lib/hooks/usePersonalDetails";
import { FC } from "react";
import Controls from "./Controls";
import PersonalSkeleton from "./PersonalSkeleton";

const Personal: FC<{ hasControls?: boolean }> = ({ hasControls = true }) => {
  const { personalDetailsData } = usePersonalDetails();

  if (!personalDetailsData) {
    return <PersonalSkeleton />;
  }

  if (!hasControls && !personalDetailsData.personalDetails) {
    return <div className="hidden" />;
  }
  // personalDetails wont be null because it has default in the schema
  const personalDetails = personalDetailsData.personalDetails;

  return (
    <div className="flex h-fit w-full flex-col gap-4 rounded-md border border-gray-100 bg-white px-5 py-8 text-slate-900 drop-shadow-sm lg:w-96">
      {hasControls && <Controls />}
      <div className="flex flex-col">
        <span>Name</span>
        {personalDetails?.name ? (
          <span className="text-lg">{personalDetails.name}</span>
        ) : (
          <span className="text-sm text-neutral-700">Not provided</span>
        )}
      </div>
      <div className="flex flex-col">
        <span>Date of Birth</span>
        {personalDetails?.dob ? (
          <span className="text-lg">{personalDetails.dob}</span>
        ) : (
          <span className="text-sm text-neutral-700">Not provided</span>
        )}
      </div>
      <div className="flex flex-col">
        <span>Email</span>
        {personalDetails?.email ? (
          <span className="text-lg">{personalDetails.email}</span>
        ) : (
          <span className="text-sm text-neutral-700">Not provided</span>
        )}
      </div>
      <div className="flex flex-col">
        <span className="">Personal Website</span>
        {personalDetails?.website ? (
          <span className="text-lg">{personalDetails.website}</span>
        ) : (
          <span className="text-sm text-neutral-700">Not provided</span>
        )}
      </div>
    </div>
  );
};

export default Personal;
