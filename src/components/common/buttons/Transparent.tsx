import { FC, ReactNode } from "react";

interface Props
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode;
}

const Transparent: FC<Props> = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className="group relative flex w-full justify-center rounded-md border border-transparent  bg-neutral-100/70 py-2 px-4 text-sm font-medium hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    >
      {children}
    </button>
  );
};

export default Transparent;
