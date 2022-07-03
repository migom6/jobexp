import Secondary from "components/common/buttons/Secondary";
import Submit from "components/common/buttons/Submit";
import TextArea from "components/common/TextArea";
import { Dispatch, FC, SetStateAction } from "react";

const EditAbout: FC<{ setOpen: Dispatch<SetStateAction<boolean>> }> = ({
  setOpen,
}) => {
  return (
    <form className="flex min-w-[300px] flex-col gap-5 rounded-md bg-white px-5 py-8">
      <h1 className="text-xl font-semibold">Update personal details</h1>
      <TextArea />
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

export default EditAbout;
