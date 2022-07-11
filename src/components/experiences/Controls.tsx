import { PlusCircleIcon } from "@heroicons/react/outline";
import offlineToast from "components/common/offlineToast";
import Visibility from "components/visibility/Index";
import { updateJobExperiences } from "lib/api";
import useJobExperiences from "lib/hooks/useJobExperiences";
import toastPromisify from "lib/toastPromisify";
import { useCallback, useState } from "react";
import { Modal } from "../common/modal";
import AddExperience from "./ExperienceForm";

const Controls = () => {
  const [isOpen, setOpen] = useState(false);
  const { jobExperiencesData, mutateJobExperiencesData } = useJobExperiences();

  const handleVisibilityChange = useCallback(async () => {
    if (!jobExperiencesData) return;
    try {
      const res = updateJobExperiences({
        jobExperienceData: { isPublic: !jobExperiencesData.isPublic },
      });
      toastPromisify(res, {
        loading: "Changing visibility...",
        success: "Success!",
      });
      mutateJobExperiencesData(await res, { revalidate: false });
    } catch (e) {
      if (!navigator.onLine) {
        mutateJobExperiencesData(
          { ...jobExperiencesData, isPublic: !jobExperiencesData.isPublic },
          { revalidate: false }
        );
        offlineToast();
      } else {
        console.error(e);
      }
    } finally {
      setOpen(false);
    }
  }, [jobExperiencesData, mutateJobExperiencesData]);
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
