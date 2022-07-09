import { FC, ReactNode } from "react";

const Info: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="mt-4 flex w-full justify-center rounded-md bg-white px-12 py-12 text-neutral-500 drop-shadow">
      {children}
    </div>
  );
};

export default Info;
