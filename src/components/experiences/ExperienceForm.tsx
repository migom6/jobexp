import Secondary from "components/common/buttons/Secondary";
import Submit from "components/common/buttons/Submit";
import Input from "components/common/Input";
import TextArea from "components/common/TextArea";
import { Select, Option } from "components/common/Select";
import { Dispatch, ReactElement, SetStateAction, useCallback } from "react";
import { months, years } from "lib/date";
import CheckBox from "components/common/CheckBox";
import ImageUpload from "components/common/ImageUpload";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { JobExperience, JobExperienceForm } from "lib/types";
import ErrorText from "components/common/ErrorText";
import { experienceToFormValue, formValueToExperience } from "lib/parsers";
import { editJobExperience, newJobExperience } from "lib/api";
import useJobExperiences from "lib/hooks/useJobExperiences";
import toastPromisify from "lib/toastPromisify";
import offlineToast from "components/common/offlineToast";

const defaultValues = {
  startYear: 2022,
  startMonth: "January",
  endYear: 2022,
  endMonth: "January",
  company: "",
  companyImageUrl: "",
  description: "",
  jobTitle: "",
  isCurrent: false,
};

type Props1 = {
  type: "edit";
  jobExperience: JobExperience;
  setOpen: Dispatch<SetStateAction<boolean>>;
};
type Props2 = {
  type: "add";
  setOpen: Dispatch<SetStateAction<boolean>>;
};

//@TODO check if start date always older than end date

export default function ExperienceForm(props: Props1 | Props2): ReactElement {
  const { setOpen, type } = props;
  const { control, handleSubmit, watch } = useForm<JobExperienceForm>({
    defaultValues:
      type === "add"
        ? defaultValues
        : experienceToFormValue(props.jobExperience),
  });
  const { jobExperiencesData, mutateJobExperiencesData } = useJobExperiences();

  const onSubmit: SubmitHandler<JobExperienceForm> = async (data) => {
    try {
      if (type === "add") {
        await addJobExperienceHandler(data);
      } else {
        await editJobExperienceHandler(data);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setOpen(false);
    }
  };

  const addJobExperienceHandler = useCallback(
    async (data: JobExperienceForm) => {
      if (!jobExperiencesData) return;

      try {
        const jobs = newJobExperience({
          jobExperience: formValueToExperience(data),
        });
        toastPromisify(jobs, {
          loading: "Adding new job experience.",
          success: "Success!",
        });
        mutateJobExperiencesData(await jobs, {
          revalidate: false,
        });
      } catch (e) {
        if (!navigator.onLine) {
          const length = jobExperiencesData.jobExperiences?.length ?? 0;
          const newId = length + 1;
          mutateJobExperiencesData(
            {
              ...jobExperiencesData,
              jobExperiences: [
                { id: newId, ...formValueToExperience(data) },
                ...(jobExperiencesData.jobExperiences?.map((j) => ({ ...j })) ??
                  []),
              ],
            },
            { revalidate: false }
          );
          offlineToast();
        } else {
          console.error(e);
        }
      }
    },
    [jobExperiencesData, mutateJobExperiencesData]
  );

  const editJobExperienceHandler = useCallback(
    async (data: JobExperienceForm) => {
      if (type !== "edit") return;
      if (!jobExperiencesData) return;

      try {
        const jobs = editJobExperience({
          jobExperience: {
            id: props.jobExperience.id,
            ...formValueToExperience(data),
          },
        });
        toastPromisify(jobs, {
          loading: "Edit job experience.",
          success: "Success!",
        });
        mutateJobExperiencesData(await jobs, {
          revalidate: false,
        });
      } catch (e) {
        if (!navigator.onLine) {
          mutateJobExperiencesData(
            {
              ...jobExperiencesData,
              jobExperiences:
                jobExperiencesData.jobExperiences?.map((jobExperience) => {
                  if (jobExperience.id === props.jobExperience.id) {
                    return {
                      id: jobExperience.id,
                      ...formValueToExperience(data),
                    };
                  }
                  return jobExperience;
                }) ?? [],
            },
            { revalidate: false }
          );
          offlineToast();
        } else {
          console.error(e);
        }
      }
    },
    [jobExperiencesData, mutateJobExperiencesData, props, type]
  );

  const currentlyWorking = watch("isCurrent");

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex min-w-[300px] flex-col gap-5 rounded-md bg-white px-5 py-8 text-neutral-900"
    >
      <h1 className="text-xl font-semibold">Add Experience</h1>
      <div>
        <label className="text-sm">Company photo</label>
        <Controller
          name="companyImageUrl"
          control={control}
          render={({ field: { value, name, onBlur, onChange } }) => (
            <ImageUpload
              value={value}
              onBlur={onBlur}
              name={name}
              handleChange={(v) => onChange(v)}
              imagecontainerclassname="h-24 w-24 rounded-full"
            />
          )}
        />
      </div>
      <Controller
        name="companyName"
        control={control}
        rules={{ required: true }}
        render={({
          field: { name, onBlur, onChange, value },
          fieldState: { isTouched, error },
        }) => (
          <div>
            <Input
              className=""
              type="text"
              placeholder="Company Name *"
              value={value}
              name={name}
              onBlur={onBlur}
              onChange={onChange}
            />
            {error && <ErrorText>required</ErrorText>}
          </div>
        )}
      />
      <Controller
        name="jobTitle"
        control={control}
        rules={{ required: true }}
        render={({
          field: { name, onBlur, onChange, value },
          fieldState: { isTouched, error },
        }) => (
          <div>
            <Input
              className=""
              type="text"
              placeholder="Job Title *"
              value={value}
              name={name}
              onBlur={onBlur}
              onChange={onChange}
            />
            {error && <ErrorText>required</ErrorText>}
          </div>
        )}
      />
      <div className="flex flex-col gap-1">
        <label className="text-sm">Start Date *</label>
        <div className="flex gap-2">
          <Controller
            name="startMonth"
            control={control}
            rules={{ required: true }}
            render={({ field: { name, onBlur, onChange, value } }) => (
              <Select
                value={value}
                name={name}
                onBlur={onBlur}
                onChange={onChange}
              >
                {months.map((month) => (
                  <Option key={month}>{month}</Option>
                ))}
              </Select>
            )}
          />
          <Controller
            name="startYear"
            control={control}
            rules={{ required: true }}
            render={({ field: { name, onBlur, onChange, value } }) => (
              <Select
                value={value}
                name={name}
                onBlur={onBlur}
                onChange={onChange}
              >
                {years.map((year) => (
                  <Option key={year}>{year}</Option>
                ))}
              </Select>
            )}
          />
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-sm">End Date *</label>
        <div className="flex gap-2">
          <Controller
            name="endMonth"
            control={control}
            rules={{ required: true }}
            render={({ field: { name, onBlur, onChange, value } }) => (
              <Select
                disabled={currentlyWorking}
                value={value}
                name={name}
                onBlur={onBlur}
                onChange={onChange}
              >
                {months.map((month) => (
                  <Option key={month}>{month}</Option>
                ))}
              </Select>
            )}
          />
          <Controller
            name="endYear"
            control={control}
            rules={{ required: true }}
            render={({ field: { name, onBlur, onChange, value } }) => (
              <Select
                disabled={currentlyWorking}
                value={value}
                name={name}
                onBlur={onBlur}
                onChange={onChange}
              >
                {years.map((year) => (
                  <Option key={year}>{year}</Option>
                ))}
              </Select>
            )}
          />
        </div>
        <div className="mt-1 flex items-center gap-2">
          <Controller
            name="isCurrent"
            control={control}
            rules={{}}
            render={({ field: { name, onBlur, onChange, value } }) => (
              <CheckBox
                name={name}
                checked={value}
                onChange={(e) => onChange(e.target.checked)}
                onBlur={onBlur}
              />
            )}
          />
          <label className="text-sm">Currently working</label>
        </div>
      </div>
      <Controller
        name="description"
        control={control}
        rules={{}}
        render={({ field: { name, onBlur, onChange, value } }) => (
          <TextArea
            className=""
            placeholder="Job Description"
            value={value}
            name={name}
            onBlur={onBlur}
            onChange={onChange}
          />
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
}
