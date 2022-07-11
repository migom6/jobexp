/* eslint-disable @next/next/no-img-element */
import {
  ChangeEventHandler,
  DetailedHTMLProps,
  FC,
  InputHTMLAttributes,
  ReactNode,
  useCallback,
} from "react";
import { XIcon } from "@heroicons/react/solid";
import toast from "react-hot-toast";

// use handleChange instead of onChange
interface Props
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  value: string;
  handleChange: (value: string) => void;
  children?: ReactNode;
  imagecontainerclassname?: string;
}

const Index: FC<Props> = ({ value, handleChange, ...props }) => {
  const onUpload: ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      const file = e.target.files![0];
      if (file) {
        if (file.size > 1000000) {
          toast.error("File size is too big");
          handleChange("");
          return;
        }
        const reader = new FileReader();
        reader.onload = (e) => {
          handleChange(e.target!.result as string);
        };
        reader.readAsDataURL(file);
      }
    },
    [handleChange]
  );

  return (
    <div>
      {value.length > 0 && (
        <div>
          <img
            className={props.imagecontainerclassname}
            alt="not found"
            width={"250px"}
            src={value}
          />
          <button
            className="mt-1 flex items-center gap-1 rounded-md pr-1 outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2"
            onClick={() => handleChange("")}
          >
            <XIcon className="h-5 w-5 text-red-500" />
            Remove
          </button>
        </div>
      )}
      {!(value.length > 0) && (
        <input
          className="text-sm"
          type="file"
          accept="image/png, image/jpeg"
          onChange={onUpload}
          {...props}
        >
          {props.children}
        </input>
      )}
    </div>
  );
};

export default Index;
