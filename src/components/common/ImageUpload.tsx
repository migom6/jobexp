import { DetailedHTMLProps, FC, InputHTMLAttributes, ReactNode } from "react";

interface Props
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  children?: ReactNode;
}

const Index: FC<Props> = (props) => {
  return (
    <input
      {...props}
      className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
    >
      {props.children}
    </input>
  );
};

export default Index;
