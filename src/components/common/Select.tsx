import {
  DetailedHTMLProps,
  FC,
  OptionHTMLAttributes,
  ReactNode,
  SelectHTMLAttributes,
} from "react";

interface SelectProps
  extends DetailedHTMLProps<
    SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  > {
  children: ReactNode;
}

export const Select: FC<SelectProps> = ({ children, ...props }) => {
  return (
    <select
      className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 disabled:cursor-not-allowed sm:text-sm"
      {...props}
    >
      {children}
    </select>
  );
};

interface OptionProps
  extends DetailedHTMLProps<
    OptionHTMLAttributes<HTMLOptionElement>,
    HTMLOptionElement
  > {
  children: ReactNode;
}

export const Option: FC<OptionProps> = ({ children, ...props }) => {
  return <option {...props}>{children}</option>;
};
