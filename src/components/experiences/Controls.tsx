import { PlusCircleIcon } from "@heroicons/react/outline";
import Visibility from "components/visibility/Index";
import { updateJobExperiences } from "lib/api";
import useJobExperiences from "lib/hooks/useJobExperiences";
import { useState } from "react";
import toast from "react-hot-toast";
import { Modal } from "../common/modal";
import AddExperience from "./ExperienceForm";

const Controls = () => {
  const [isOpen, setOpen] = useState(false);
  const { jobExperiencesData, mutateJobExperiencesData } = useJobExperiences();

  const handleVisibilityChange = async () => {
    if (!jobExperiencesData) return;
    try {
      const res = updateJobExperiences({
        jobExperienceData: { isPublic: !jobExperiencesData.isPublic },
      });
      toast.promise(res, {
        loading: "Changing visibility...",
        success: "Success!",
        error: "Error changing visibility",
      });
      mutateJobExperiencesData(res, { revalidate: false });
    } catch (e) {
      throw e;
    } finally {
      setOpen(false);
    }
  };
  return (
    <>
      <div className="flex items-center gap-5">
        <button
          aria-label="Add"
          className="rounded-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          onClick={() => setOpen((isOpen) => !isOpen)}
        >
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
