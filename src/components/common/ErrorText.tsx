import { FC, ReactNode } from "react";

const ErrorText: FC<{ children: ReactNode | string }> = ({ children }) => {
  return <span className="text-sm text-red-500">{children}</span>;
};

export default ErrorText;
