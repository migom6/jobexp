import { PersonalDetails } from "lib/types";
import { FC } from "react";
import Controls from "./Controls";

const personalDetails: Partial<PersonalDetails> = {
  name: "John Doe",
  email: "m@m.com",
  dob: "2000-01-01",
  website: "www.m.com",
};

const Personal: FC<{ hasControls?: boolean }> = ({ hasControls = true }) => {
  return (
    <div className="flex h-fit w-full flex-col gap-4 rounded-md border border-gray-100 bg-white px-5 py-8 text-slate-900 drop-shadow-sm lg:w-96">
      {hasControls && <Controls />}
      <div className="flex flex-col">
        <span>Name</span>
        {personalDetails.name ? (
          <span className="text-lg">{personalDetails.name}</span>
        ) : (
          <span className="text-sm text-neutral-700">Not provided</span>
        )}
      </div>
      <div className="flex flex-col">
        <span>Date of Birth</span>
        {personalDetails.dob ? (
          <span className="text-lg">{personalDetails.dob}</span>
        ) : (
          <span className="text-sm text-neutral-700">Not provided</span>
        )}
      </div>
      <div className="flex flex-col">
        <span>Email</span>
        {personalDetails.email ? (
          <span className="text-lg">{personalDetails.email}</span>
        ) : (
          <span className="text-sm text-neutral-700">Not provided</span>
        )}
      </div>
      <div className="flex flex-col">
        <span className="">Personal Website</span>
        {personalDetails.website ? (
          <span className="text-lg">{personalDetails.website}</span>
        ) : (
          <span className="text-sm text-neutral-700">Not provided</span>
        )}
      </div>
    </div>
  );
};

export default Personal;
