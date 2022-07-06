import Secondary from "components/common/buttons/Secondary";
import Submit from "components/common/buttons/Submit";
import ErrorText from "components/common/ErrorText";
import ImageUpload from "components/common/ImageUpload";
import Input from "components/common/Input";
import { putProfileImageUrl } from "lib/api";
import useProfile from "lib/hooks/useProfile";
import {
  Dispatch,
  FC,
  FormEventHandler,
  SetStateAction,
  useState,
} from "react";

const errorMessage = "Please upload an image";

const EditPersonal: FC<{
  setOpen: Dispatch<SetStateAction<boolean>>;
}> = ({ setOpen }) => {
  const { profile, mutateProfile } = useProfile({});
  const [image, setImage] = useState(profile?.profileImageUrl ?? "");
  const [error, setError] = useState("");

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    if (!image) {
      setError(errorMessage);
      return;
    }
    setError("");

    try {
      const profile = await putProfileImageUrl({ profileImageUrl: image });
      mutateProfile(profile);
    } catch (e) {
      console.log((e as Error).message);
    }
    setOpen(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex min-w-[300px] flex-col gap-5 rounded-md bg-white px-5 py-8"
    >
      <h1 className="text-xl font-semibold">Change Profile Picture</h1>
      <div className="self-center">
        <ImageUpload
          value={image}
          handleChange={(v) => {
            if (v) {
              setError("");
            } else {
              setError(errorMessage);
            }
            setImage(v);
          }}
          imagecontainerclassname="h-24 w-24 rounded-full"
        />
        {error.length > 0 && <ErrorText>{error}</ErrorText>}
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
