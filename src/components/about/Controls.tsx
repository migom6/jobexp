import { PencilAltIcon } from "@heroicons/react/solid";
import Visibility from "components/visibility/Index";
import { putProfileAbout } from "lib/api";
import useAbout from "lib/hooks/useAbout";
import { useCallback, useState } from "react";
import { Modal } from "../common/modal";
import EditAbout from "./EditAbout";
import toastPromisify from "lib/toastPromisify";
import offlineToast from "components/common/offlineToast";

const Controls = () => {
  const [isOpen, setOpen] = useState(false);
  const { aboutData, mutateAboutData } = useAbout();

  const handleVisibilityChange = useCallback(async () => {
    if (!aboutData) return;
    try {
      const res = putProfileAbout({
        aboutData: {
          about: aboutData.about ?? "",
          isPublic: !aboutData.isPublic,
        },
      });
      toastPromisify(res, {
        loading: "Changing visibility...",
        success: "Success!",
      });
      mutateAboutData(await res);
    } catch (e) {
      if (!navigator.onLine) {
        mutateAboutData(
          { ...aboutData, isPublic: !aboutData.isPublic },
          { revalidate: false }
        );
        offlineToast();
      } else {
        console.error(e);
      }
    } finally {
      setOpen(false);
    }
  }, [aboutData, mutateAboutData]);

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
