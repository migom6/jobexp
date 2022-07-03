import { FC, ReactNode } from "react";

interface Props
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode;
}

const Secondary: FC<Props> = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className="bg-white-600 group relative flex w-full justify-center rounded-md border border-neutral-600 py-2 px-4 text-sm font-medium text-neutral-900 hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2"
    >
      {children}
    </button>
  );
};

export default Secondary;
