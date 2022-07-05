import { PencilAltIcon } from "@heroicons/react/solid";
import { EyeIcon } from "@heroicons/react/solid";
import { useEffect, useState } from "react";
import { Modal } from "../common/modal";
import UploadProfile from "./UploadProfile";
import { CameraIcon } from "@heroicons/react/solid";

const Controls = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className="flex h-full w-full items-center justify-center gap-1 bg-neutral-600/50 text-sm text-neutral-100 group-hover:flex md:hidden"
      >
        <CameraIcon className=" h-5 w-5 text-neutral-100 " />
        change
      </div>
      <Modal isOpen={isOpen} setOpen={setOpen}>
        <UploadProfile setOpen={setOpen} />
      </Modal>
    </>
  );
};

export default Controls;
