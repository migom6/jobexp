import { PencilAltIcon } from "@heroicons/react/outline";
import { TrashIcon } from "@heroicons/react/solid";
import offlineToast from "components/common/offlineToast";
import { deleteJobExperience } from "lib/api";
import useJobExperiences from "lib/hooks/useJobExperiences";
import toastPromisify from "lib/toastPromisify";
import { JobExperience } from "lib/types";
import { FC, useCallback, useState } from "react";
import { Modal } from "../common/modal";
import ExperienceForm from "./ExperienceForm";

const ControlsExperienceCard: FC<{ jobExperience: JobExperience }> = ({
  jobExperience,
}) => {
  const [isOpen, setOpen] = useState(false);

  const { jobExperiencesData, mutateJobExperiencesData } = useJobExperiences();

  const onDelete = useCallback(async () => {
    if (!jobExperiencesData) return;
    try {
      const jobs = deleteJobExperience({
        id: jobExperience.id,
      });
      toastPromisify(jobs, {
        loading: "Deleting job experience.",
        success: "Success!",
      });
      mutateJobExperiencesData(await jobs, {
        revalidate: false,
      });
    } catch (e) {
      if (!navigator.onLine) {
        mutateJobExperiencesData(
          {
            ...jobExperiencesData,
            jobExperiences: (jobExperiencesData.jobExperiences ?? []).filter(
              (j) => j.id !== jobExperience.id
            ),
          },
          { revalidate: false }
        );
        offlineToast();
      } else {
        console.error(e);
      }
    } finally {
      setOpen(false);
    }
  }, [jobExperience.id, jobExperiencesData, mutateJobExperiencesData]);

  return (
    <>
      <div className="ml-auto flex gap-5">
        <button
          aria-label="Edit job experience"
          className="h-fit rounded-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          onClick={() => setOpen((isOpen) => !isOpen)}
        >
          <PencilAltIcon className="h-5 w-5 text-neutral-500 hover:text-neutral-700" />
        </button>
        <button
          aria-label="Delete job experience"
          className="h-fit rounded-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          onClick={onDelete}
        >
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
