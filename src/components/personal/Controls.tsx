import { PencilAltIcon } from "@heroicons/react/solid";
import offlineToast from "components/common/offlineToast";
import Visibility from "components/visibility/Index";
import { putPersonalDetails } from "lib/api";
import usePersonalDetails from "lib/hooks/usePersonalDetails";
import toastPromisify from "lib/toastPromisify";
import { useCallback, useState } from "react";
import { Modal } from "../common/modal";
import EditPersonal from "./EditPersonal";

const Controls = () => {
  const [isOpen, setOpen] = useState(false);
  const { personalDetailsData, mutatePersonalDetailsData } =
    usePersonalDetails();

  const handleVisibilityChange = useCallback(async () => {
    if (!personalDetailsData) return;
    try {
      const res = putPersonalDetails({
        personalDetailsData: {
          // personalDetails will be there in db
          personalDetails: personalDetailsData.personalDetails!,
          isPublic: !personalDetailsData.isPublic,
        },
      });
      toastPromisify(res, {
        loading: "Changing visibility...",
        success: "Success!",
      });
      mutatePersonalDetailsData(await res);
    } catch (e) {
      if (!navigator.onLine) {
        mutatePersonalDetailsData(
          { ...personalDetailsData, isPublic: !personalDetailsData.isPublic },
          { revalidate: false }
        );
        offlineToast();
      } else {
        console.error(e);
      }
    } finally {
      setOpen(false);
    }
  }, [mutatePersonalDetailsData, personalDetailsData]);

  return (
    <>
      <div className="absolute right-5 top-5 flex items-center gap-5">
        <button
          aria-label="Edit"
          className="h-fit rounded-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          onClick={() => setOpen((isOpen) => !isOpen)}
        >
          <PencilAltIcon className="h-5 w-5 text-neutral-500 hover:text-neutral-700" />
        </button>
        <Visibility
          isPublic={personalDetailsData?.isPublic ?? true}
          onClick={handleVisibilityChange}
        />
      </div>
      <Modal isOpen={isOpen} setOpen={setOpen}>
        <EditPersonal setOpen={setOpen} />
      </Modal>
    </>
  );
};

export default Controls;
