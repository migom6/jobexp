import Secondary from "components/common/buttons/Secondary";
import Submit from "components/common/buttons/Submit";
import ErrorText from "components/common/ErrorText";
import ImageUpload from "components/common/ImageUpload";
import { putProfileImageUrl } from "lib/api";
import useProfileImageUrl from "lib/hooks/useProfileImageUrl";
import { toast } from "react-hot-toast";
import {
  Dispatch,
  FC,
  FormEventHandler,
  SetStateAction,
  useCallback,
  useState,
} from "react";
import toastPromisify from "lib/toastPromisify";
import offlineToast from "components/common/offlineToast";
import { FetchError } from "lib/fetchJson";

const errorMessage = "Please upload an image";

const EditPersonal: FC<{
  setOpen: Dispatch<SetStateAction<boolean>>;
}> = ({ setOpen }) => {
  const { profileImageUrl, mutateProfileImageUrl } = useProfileImageUrl();
  const [image, setImage] = useState(profileImageUrl?.profileImageUrl ?? "");
  const [error, setError] = useState("");

  const handleSubmit: FormEventHandler<HTMLFormElement> = useCallback(
    async (e) => {
      e.preventDefault();
      if (!image) {
        setError(errorMessage);
        return;
      }
      setError("");
      try {
        const profile = putProfileImageUrl({ profileImageUrl: image });
        toastPromisify(profile, {
          loading: "Saving...",
          success: "Saved!",
        });
        mutateProfileImageUrl(await profile, { revalidate: false });
      } catch (e) {
        if (!navigator.onLine) {
          mutateProfileImageUrl(
            {
              profileImageUrl: image,
            },
            { revalidate: false }
          );
          offlineToast();
        } else if ((e as FetchError)?.response?.status === 413) {
          toast.error("Image is too large");
        } else {
          console.error(e);
        }
      } finally {
        setOpen(false);
      }
    },
    [image, mutateProfileImageUrl, setOpen]
  );

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
