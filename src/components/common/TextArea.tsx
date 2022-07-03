import { DetailedHTMLProps, FC, TextareaHTMLAttributes } from "react";

interface Props
  extends DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {}

const TextArea: FC<Props> = (props) => {
  return (
    <textarea
      {...props}
      className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
    >
      {props.children}
    </textarea>
  );
};

export default TextArea;
