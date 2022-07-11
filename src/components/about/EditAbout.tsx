import Secondary from "components/common/buttons/Secondary";
import Submit from "components/common/buttons/Submit";
import ErrorText from "components/common/ErrorText";
import TextArea from "components/common/TextArea";
import offlineToast from "components/common/offlineToast";
import { putProfileAbout } from "lib/api";
import { FetchError } from "lib/fetchJson";
import useAbout from "lib/hooks/useAbout";
import useAsyncError from "lib/hooks/useAsyncError";
import toastPromisify from "lib/toastPromisify";
import {
  Dispatch,
  FC,
  FormEventHandler,
  SetStateAction,
  useCallback,
  useState,
} from "react";

const errorMessage = "Required";

const EditAbout: FC<{
  setOpen: Dispatch<SetStateAction<boolean>>;
}> = ({ setOpen }) => {
  const { aboutData, mutateAboutData } = useAbout();
  const [_about, setAbout] = useState(aboutData?.about ?? "");
  const [error, setError] = useState("");

  const handleSubmit: FormEventHandler<HTMLFormElement> = useCallback(
    async (e) => {
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
        toastPromisify(res, {
          loading: "Saving...",
          success: "Saved!",
        });
        mutateAboutData(await res, { revalidate: false });
      } catch (e) {
        if (!navigator.onLine) {
          mutateAboutData(
            { ...aboutData, about: _about },
            { revalidate: false }
          );
          offlineToast();
        } else {
          console.error(e);
        }
      } finally {
        setOpen(false);
      }
    },
    [_about, aboutData, mutateAboutData, setOpen]
  );

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
