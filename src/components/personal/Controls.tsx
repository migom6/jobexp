import { PencilAltIcon } from "@heroicons/react/solid";
import { EyeIcon } from "@heroicons/react/solid";
import Visibility from "components/visibility/Index";
import { PersonalDetails } from "lib/types";
import { useEffect, useState } from "react";
import { Modal } from "../common/modal";
import EditPersonal from "./EditPersonal";

const Controls = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className="absolute right-5 top-5 flex gap-5">
        <button onClick={() => setOpen((isOpen) => !isOpen)}>
          <PencilAltIcon className="h-5 w-5 text-neutral-500 hover:text-neutral-700" />
        </button>
        <Visibility section="personalDetails" />
      </div>
      <Modal isOpen={isOpen} setOpen={setOpen}>
        <EditPersonal setOpen={setOpen} />
      </Modal>
    </>
  );
};

export default Controls;
