import Secondary from "components/common/buttons/Secondary";
import Submit from "components/common/buttons/Submit";
import Input from "components/common/Input";
import { Dispatch, FC, SetStateAction } from "react";

const EditPersonal: FC<{ setOpen: Dispatch<SetStateAction<boolean>> }> = ({
  setOpen,
}) => {
  return (
    <form className="flex min-w-[300px] flex-col gap-5 rounded-md bg-white px-5 py-8">
      <h1 className="text-xl font-semibold">Update personal details</h1>
      <Input className="" type="date" placeholder="Date of Birth" />
      <Input className="" type="email" placeholder="Email" />
      <Input className="" type="text" placeholder="Personal website" />
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
