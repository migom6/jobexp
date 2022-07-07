export interface JobExperience {
  id: number;
  startDate: {
    year: number;
    month: string;
  };
  endDate: {
    year: number;
    month: string;
  } | null;
  companyName: string;
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
  companyName: string;
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

export interface Profile {
  username: string;
  profileImageUrl: string;
  jobExperiencesData: {
    isPublic: boolean;
    jobExperiences: JobExperience[];
  };
  personalDetailsData: {
    isPublic: boolean;
    personalDetails: PersonalDetails;
  };
  aboutData: {
    isPublic: boolean;
    about: string;
  };
}

export interface User {
  username: string;
  isLoggedIn: boolean;
}
