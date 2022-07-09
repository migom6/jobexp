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
      <button
        aria-label="Hide"
        className="h-fit rounded-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        onClick={onClick}
      >
        <EyeIcon className="h-5 w-5 text-neutral-500 hover:text-neutral-700" />
      </button>
    );
  } else {
    return (
      <button
        aria-label="Show"
        className="h-fit rounded-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        onClick={onClick}
      >
        <EyeOffIcon className="h-5 w-5 text-neutral-500 hover:text-neutral-700" />
      </button>
    );
  }
};

export default Visibility;
