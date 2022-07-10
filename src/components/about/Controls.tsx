import { PencilAltIcon } from "@heroicons/react/solid";
import Visibility from "components/visibility/Index";
import { putProfileAbout } from "lib/api";
import useAbout from "lib/hooks/useAbout";
import { useState } from "react";
import { Modal } from "../common/modal";
import EditAbout from "./EditAbout";
import { toast } from "react-hot-toast";

const Controls = () => {
  const [isOpen, setOpen] = useState(false);
  const { aboutData, mutateAboutData } = useAbout();

  const handleVisibilityChange = async () => {
    if (!aboutData) return;
    const res = putProfileAbout({
      aboutData: {
        about: aboutData.about ?? "",
        isPublic: !aboutData.isPublic,
      },
    });
    toast.promise(res, {
      loading: "Changing visibility...",
      success: "Success!",
      error: "Error changing visibility",
    });
    mutateAboutData(await res);
    setOpen(false);
  };

  return (
    <>
      <div className="flex items-center gap-5">
        <button
          aria-label="Edit"
          className="rounded-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          onClick={() => setOpen((isOpen) => !isOpen)}
        >
          <PencilAltIcon className="h-5 w-5 text-neutral-500 hover:text-neutral-700" />
        </button>
        <Visibility
          isPublic={aboutData?.isPublic ?? true}
          onClick={handleVisibilityChange}
        />
      </div>
      <Modal isOpen={isOpen} setOpen={setOpen}>
        {/* profile will be load by this time */}
        <EditAbout setOpen={setOpen} />
      </Modal>
    </>
  );
};

export default Controls;
