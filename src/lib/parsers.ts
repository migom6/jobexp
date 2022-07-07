import {
  Profile as ProfileDB,
  JobExperience as JobExperienceDB,
} from "@prisma/client";
import { convertToISO, infinteDate } from "./date";
import { JobExperience, JobExperienceForm, Profile } from "./types";

// form stuffs

export const formValueToExperience = (
  form: JobExperienceForm
): Omit<JobExperience, "id"> => {
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

// Profile

export const profileDBtoClient = (
  profileDB: ProfileDB & {
    jobExperiences: JobExperienceDB[];
  }
): Profile => {
  return {
    username: profileDB.username,
    profileImageUrl: profileDB.profileImageUrl,
    jobExperiencesData: {
      isPublic: profileDB.jobExperiencesIsPublic,
      jobExperiences: jobExperiencesDBtoClient(profileDB.jobExperiences),
    },
    personalDetailsData: {
      isPublic: profileDB.personalDetailsIsPublic,
      personalDetails: JSON.parse(profileDB.personalDetails),
    },
    aboutData: {
      isPublic: profileDB.aboutIsPublic,
      about: profileDB.about,
    },
  };
};

// Job Experiences

export const jobExperiencesDBtoClient = (
  jobExperiencesDB: JobExperienceDB[]
): JobExperience[] => {
  return jobExperiencesDB.map((jobExperienceDB) => {
    const startDate = new Date(jobExperienceDB.startDate);
    const endDate =
      new Date(jobExperienceDB.endDate).getTime() === infinteDate.getTime()
        ? null
        : new Date(jobExperienceDB.endDate);

    return {
      id: jobExperienceDB.id,
      companyName: jobExperienceDB.companyName,
      companyImageUrl: jobExperienceDB.companyImageUrl,
      description: jobExperienceDB.description,
      jobTitle: jobExperienceDB.jobTitle,
      startDate: {
        month: startDate.toLocaleString("default", { month: "long" }),
        year: startDate.getFullYear(),
      },
      endDate:
        endDate === null
          ? null
          : {
              month: endDate.toLocaleString("default", { month: "long" }),
              year: endDate.getFullYear(),
            },
    };
  });
};

export const jobExperiencesClientToDB = (
  jobExperience: JobExperience
): Omit<JobExperienceDB, "username" | "createdAt" | "updatedAt" | "id"> => {
  const startDate: Date = new Date(convertToISO(jobExperience.startDate));
  const endDate: Date =
    jobExperience.endDate === null
      ? infinteDate
      : new Date(convertToISO(jobExperience.endDate));

  return {
    companyName: jobExperience.companyName,
    companyImageUrl: jobExperience.companyImageUrl,
    description: jobExperience.description,
    jobTitle: jobExperience.jobTitle,
    startDate,
    endDate,
  };
};
