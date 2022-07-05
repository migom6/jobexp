export interface JobExperience {
  startDate: {
    year: number;
    month: string;
  };
  endDate: {
    year: number;
    month: string;
  } | null;
  company: string;
  companyImageUrl: string;
  description: string;
  jobTitle: string;
}

export interface JobExperienceForm {
  startYear: number;
  startMonth: string;
  endYear: number;
  endMonth: string;
  isCurrent: boolean;
  company: string;
  companyImageUrl: string;
  description: string;
  jobTitle: string;
}

export interface PersonalDetails {
  name: string;
  dob: string;
  email: string;
  website: string;
}
