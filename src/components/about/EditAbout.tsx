import Secondary from "components/common/buttons/Secondary";
import Submit from "components/common/buttons/Submit";
import ErrorText from "components/common/ErrorText";
import TextArea from "components/common/TextArea";
import { putProfileAbout } from "lib/api";
import useAbout from "lib/hooks/useAbout";
import {
  Dispatch,
  FC,
  FormEventHandler,
  SetStateAction,
  useState,
} from "react";
import { toast } from "react-hot-toast";

const errorMessage = "Required";

const EditAbout: FC<{
  setOpen: Dispatch<SetStateAction<boolean>>;
}> = ({ setOpen }) => {
  const { aboutData, mutateAboutData } = useAbout();
  const [_about, setAbout] = useState(aboutData?.about ?? "");
  const [error, setError] = useState("");
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    if (!aboutData) return;

    e.preventDefault();
    if (!_about) {
      setError(errorMessage);
      return;
    }
    setError("");

    try {
      const res = putProfileAbout({
        aboutData: { about: _about, isPublic: aboutData.isPublic },
      });
      toast.promise(res, {
        loading: "Saving...",
        success: "Saved!",
        error: "Error while saving",
      });
      mutateAboutData(await res);
    } catch (e) {
      throw e;
    } finally {
      setOpen(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex min-w-[300px] flex-col gap-5 rounded-md bg-white px-5 py-8"
    >
      <h1 className="text-xl font-semibold">Update About Yourself</h1>
      <div>
        <TextArea
          value={_about}
          onChange={(e) => {
            if (e.target.value) {
              setError("");
            } else {
              setError(errorMessage);
            }
            setAbout(e.target.value);
          }}
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

export default EditAbout;
