import { EyeIcon, EyeOffIcon } from "@heroicons/react/solid";
import { MouseEventHandler } from "react";

const Visibility = ({
  isPublic,
  onClick,
}: {
  isPublic: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
}) => {
  if (isPublic) {
    return (
      <button onClick={onClick}>
        <EyeIcon className="h-5 w-5 text-neutral-500 hover:text-neutral-700" />
      </button>
    );
  } else {
    return (
      <button onClick={onClick}>
        <EyeOffIcon className="h-5 w-5 text-neutral-500 hover:text-neutral-700" />
      </button>
    );
  }
};

export default Visibility;
