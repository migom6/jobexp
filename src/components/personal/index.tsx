import { FC } from "react";
import Controls from "./Controls";

const Personal: FC<{ hasControls?: boolean }> = ({ hasControls = true }) => {
  return (
    <div className="flex h-fit w-full flex-col gap-4 rounded-md border border-gray-100 bg-white px-5 py-8 text-slate-900 drop-shadow-sm lg:w-96">
      {hasControls && <Controls />}
      <div className="flex flex-col">
        <span>Name</span>
        <span className="text-lg">Madhurjya Pegu</span>
      </div>
      <div className="flex flex-col">
        <span>Date of Birth</span>
        <span className="text-lg">12 Oct 1996</span>
      </div>
      <div className="flex flex-col">
        <span>Email</span>
        <span className="text-lg">migom6@gmail.com</span>
      </div>
      <div className="flex flex-col">
        <span className="">Personal Website</span>
        <span className="text-lg">http://migom6.me</span>
      </div>
    </div>
  );
};

export default Personal;
