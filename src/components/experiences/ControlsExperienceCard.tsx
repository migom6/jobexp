import { PencilAltIcon } from "@heroicons/react/outline";
import { TrashIcon } from "@heroicons/react/solid";
import { deleteJobExperience } from "lib/api";
import useJobExperiences from "lib/hooks/useJobExperiences";
import { JobExperience } from "lib/types";
import { FC, useState } from "react";
import toast from "react-hot-toast";
import { Modal } from "../common/modal";
import ExperienceForm from "./ExperienceForm";

const ControlsExperienceCard: FC<{ jobExperience: JobExperience }> = ({
  jobExperience,
}) => {
  const [isOpen, setOpen] = useState(false);

  const { mutateJobExperiencesData } = useJobExperiences();

  const onDelete = async () => {
    try {
      const jobs = deleteJobExperience({
        id: jobExperience.id,
      });
      toast.promise(jobs, {
        loading: "Deleteing job experience.",
        success: "Success!",
        error: "Error",
      });
      mutateJobExperiencesData(await jobs, {
        revalidate: false,
      });
    } catch (e) {
      throw e;
    } finally {
      setOpen(false);
    }
  };

  return (
    <>
      <div className="ml-auto flex gap-5">
        <button
          className="h-fit rounded-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          onClick={() => setOpen((isOpen) => !isOpen)}
        >
          <PencilAltIcon className="h-5 w-5 text-neutral-500 hover:text-neutral-700" />
        </button>
        <button
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
