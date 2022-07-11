import Secondary from "components/common/buttons/Secondary";
import Submit from "components/common/buttons/Submit";
import ErrorText from "components/common/ErrorText";
import Input from "components/common/Input";
import offlineToast from "components/common/offlineToast";
import { putPersonalDetails } from "lib/api";
import usePersonalDetails from "lib/hooks/usePersonalDetails";
import toastPromisify from "lib/toastPromisify";
import { PersonalDetails } from "lib/types";
import { Dispatch, FC, SetStateAction, useCallback } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

const EditPersonal: FC<{
  setOpen: Dispatch<SetStateAction<boolean>>;
}> = ({ setOpen }) => {
  const { personalDetailsData, mutatePersonalDetailsData } =
    usePersonalDetails();

  const { control, handleSubmit } = useForm<PersonalDetails>({
    defaultValues: personalDetailsData?.personalDetails ?? {},
  });

  const onSubmit: SubmitHandler<PersonalDetails> = useCallback(
    async (data) => {
      try {
        const res = putPersonalDetails({
          personalDetailsData: {
            personalDetails: data,
            isPublic: personalDetailsData?.isPublic ?? true,
          },
        });
        toastPromisify(res, {
          loading: "Saving...",
          success: "Saved!",
        });
        mutatePersonalDetailsData(await res);
      } catch (e) {
        if (!navigator.onLine) {
          mutatePersonalDetailsData(
            {
              personalDetails: data,
              isPublic: personalDetailsData?.isPublic ?? true,
            },
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
    [mutatePersonalDetailsData, personalDetailsData?.isPublic, setOpen]
  );

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex min-w-[300px] flex-col gap-5 rounded-md bg-white px-5 py-8"
    >
      <h1 className="text-xl font-semibold">Update personal details</h1>
      <Controller
        name="name"
        control={control}
        rules={{ required: "required" }}
        render={({
          field: { name, onBlur, onChange, value },
          fieldState: { isTouched, error },
        }) => (
          <div>
            <Input
              className=""
              type="text"
              placeholder="Name *"
              value={value}
              name={name}
              onBlur={onBlur}
              onChange={onChange}
            />
            {error && <ErrorText>{error.message}</ErrorText>}
          </div>
        )}
      />
      <Controller
        name="dob"
        control={control}
        rules={{ required: "required" }}
        render={({
          field: { name, onBlur, onChange, value },
          fieldState: { isTouched, error },
        }) => (
          <div>
            <Input
              className=""
              type="date"
              placeholder="Date of Birth *"
              value={value}
              name={name}
              onBlur={onBlur}
              onChange={onChange}
            />
            {error && <ErrorText>{error.message}</ErrorText>}
          </div>
        )}
      />
      <Controller
        name="email"
        control={control}
        rules={{
          required: "required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: "invalid email address",
          },
        }}
        render={({
          field: { name, onBlur, onChange, value },
          fieldState: { isTouched, error },
        }) => (
          <div>
            <Input
              className=""
              type="text"
              placeholder="Email *"
              value={value}
              name={name}
              onBlur={onBlur}
              onChange={onChange}
            />
            {error && <ErrorText>{error.message}</ErrorText>}
          </div>
        )}
      />
      <Controller
        name="website"
        control={control}
        render={({
          field: { name, onBlur, onChange, value },
          fieldState: { isTouched, error },
        }) => (
          <div>
            <Input
              className=""
              type="text"
              placeholder="Website"
              value={value}
              name={name}
              onBlur={onBlur}
              onChange={onChange}
            />
          </div>
        )}
      />
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
