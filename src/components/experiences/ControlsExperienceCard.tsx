import { PencilAltIcon } from "@heroicons/react/outline";
import { TrashIcon } from "@heroicons/react/solid";
import { JobExperience } from "lib/types";
import { FC, useEffect, useState } from "react";
import { Modal } from "../common/modal";
import ExperienceForm from "./ExperienceForm";

const ControlsExperienceCard: FC<{ jobExperience: JobExperience }> = ({
  jobExperience,
}) => {
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
        <ExperienceForm
          jobExperience={jobExperience}
          type="edit"
          setOpen={setOpen}
        />
      </Modal>
    </>
  );
};

export default ControlsExperienceCard;
