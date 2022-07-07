import { PlusCircleIcon } from "@heroicons/react/outline";
import Visibility from "components/visibility/Index";
import useJobExperiences from "lib/hooks/useJobExperiences";
import { useEffect, useState } from "react";
import { Modal } from "../common/modal";
import AddExperience from "./ExperienceForm";

const Controls = () => {
  const [isOpen, setOpen] = useState(false);
  const { jobExperiencesData } = useJobExperiences();

  const handleVisibilityChange = async () => {};
  return (
    <>
      <div className="flex gap-5">
        <button onClick={() => setOpen((isOpen) => !isOpen)}>
          <PlusCircleIcon className="h-5 w-5 text-neutral-500 hover:text-neutral-700" />
        </button>
        <Visibility
          isPublic={jobExperiencesData?.isPublic ?? true}
          onClick={handleVisibilityChange}
        />
      </div>
      <Modal isOpen={isOpen} setOpen={setOpen}>
        <AddExperience type="add" setOpen={setOpen} />
      </Modal>
    </>
  );
};

export default Controls;
