// checked:border-blue-600 focus:outline-none
import { DetailedHTMLProps, FC, InputHTMLAttributes, ReactNode } from "react";

interface Props
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  children?: ReactNode;
}

const CheckBox: FC<Props> = (props) => {
  return (
    <input
      {...props}
      type="checkbox"
      className="h-4 w-4 overflow-hidden rounded-sm"
    >
      {props.children}
    </input>
  );
};

export default CheckBox;
