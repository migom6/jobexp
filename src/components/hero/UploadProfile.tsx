import Secondary from "components/common/buttons/Secondary";
import Submit from "components/common/buttons/Submit";
import ImageUpload from "components/common/ImageUpload";
import Input from "components/common/Input";
import { Dispatch, FC, SetStateAction, useState } from "react";

const EditPersonal: FC<{ setOpen: Dispatch<SetStateAction<boolean>> }> = ({
  setOpen,
}) => {
  const [image, setImage] = useState("");

  return (
    <form className="flex min-w-[300px] flex-col gap-5 rounded-md bg-white px-5 py-8">
      <h1 className="text-xl font-semibold">Change Profile Picture</h1>
      <div className="self-center">
        <ImageUpload
          value={image}
          handleChange={(v) => setImage(v)}
          imagecontainerclassname="h-24 w-24 rounded-full"
        />
      </div>
      <div className="flex gap-5">
        <Submit>Submit</Submit>
        <Secondary
          onClick={() => {
            setOpen(false);
          }}
          type="button"
        >
          Close
        </Secondary>
      </div>
    </form>
  );
};

export default EditPersonal;
