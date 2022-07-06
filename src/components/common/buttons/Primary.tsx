import { FC, ReactNode } from "react";

interface Props
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode;
}

const Primary: FC<Props> = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className="group relative flex w-full justify-center rounded-md border border-transparent bg-neutral-600 py-2 px-4 text-sm font-medium text-white hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2"
    >
      {children}
    </button>
  );
};

export default Primary;
