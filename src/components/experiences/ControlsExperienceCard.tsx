import { PencilAltIcon } from "@heroicons/react/outline";
import { TrashIcon } from "@heroicons/react/solid";
import { useEffect, useState } from "react";
import { Modal } from "../common/modal";
import AddExperience from "./AddExperience";

const ControlsExperienceCard = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className="ml-auto flex gap-5">
        <button onClick={() => setOpen((isOpen) => !isOpen)}>
          <PencilAltIcon className="h-5 w-5 text-neutral-500 hover:text-neutral-700" />
        </button>
        <button>
          <TrashIcon className="h-5 w-5 text-neutral-500 hover:text-neutral-700" />
        </button>
      </div>
      <Modal isOpen={isOpen} setOpen={setOpen}>
        <AddExperience setOpen={setOpen} />
      </Modal>
    </>
  );
};

export default ControlsExperienceCard;
