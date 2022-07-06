import { FC, ReactNode } from "react";

const Info: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="mt-4 rounded-md bg-white px-7 py-5 font-semibold text-neutral-500">
      {children}
    </div>
  );
};

export default Info;
