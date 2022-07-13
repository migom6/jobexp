import { validEndDate, convertToISO } from "lib/date";
import { JobExperienceForm } from "lib/types";
import { FieldErrors, Resolver } from "react-hook-form";

export const defaultValues = {
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

export const resolver: Resolver<JobExperienceForm, object> = (values) => {
  const {
    startYear,
    startMonth,
    endYear,
    endMonth,
    jobTitle,
    companyName,
    isCurrent,
  } = values;

  const errors: FieldErrors<JobExperienceForm> = {};

  if (jobTitle.trim() === "") {
    errors.jobTitle = {
      type: "required",
      message: "Job title is required",
    };
  }
  if (companyName.trim() === "") {
    errors.companyName = {
      type: "required",
      message: "Company name is required",
    };
  }
  if (
    !isCurrent &&
    !validEndDate(
      new Date(convertToISO({ year: startYear, month: startMonth })),
      new Date(convertToISO({ year: endYear, month: endMonth }))
    )
  ) {
    errors.endMonth = {
      type: "custom",
      message: "End date must be after start date",
    };
  }

  return { errors, values };
};
