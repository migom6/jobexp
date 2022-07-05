import { JobExperience, JobExperienceForm } from "./types";

export const formValueToExperience = (
  form: JobExperienceForm
): JobExperience => {
  const startDate = {
    year: form.startYear,
    month: form.startMonth,
  };
  const endDate = form.isCurrent
    ? null
    : {
        year: form.endYear,
        month: form.endMonth,
      };
  return {
    startDate,
    endDate,
    companyName: form.companyName,
    companyImageUrl: form.companyImageUrl,
    description: form.description,
    jobTitle: form.jobTitle,
  };
};

export const experienceToFormValue = (
  experience: JobExperience
): JobExperienceForm => {
  const startDate = experience.startDate;
  const endDate = experience.endDate;
  const isCurrent = endDate === null;
  const endYear = isCurrent ? 2022 : endDate.year;
  const endMonth = isCurrent ? "January" : endDate.month;
  return {
    startYear: startDate.year,
    startMonth: startDate.month,
    endYear,
    endMonth,
    isCurrent,
    companyName: experience.companyName,
    companyImageUrl: experience.companyImageUrl,
    description: experience.description,
    jobTitle: experience.jobTitle,
  };
};
