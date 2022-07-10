import fetchJson from "lib/fetchJson";
import { JobExperience, Profile } from "lib/types";

export type RegisterForm = {
  username: string;
  password: string;
  rpassword: string;
};

export type LoginForm = {
  username: string;
  password: string;
};

export type VisibleReq = {
  section: "about" | "experiences" | "personalDetails";
  visible: boolean;
};

export const signup = async (body: RegisterForm) => {
  return fetchJson("/api/auth/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
};

export const login = async (body: LoginForm) => {
  return fetchJson("/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
};

export const logout = async () => {
  // https://github.com/vvo/iron-session/issues/274
  return fetchJson("/api/auth/logout", { method: "POST" });
};

export const putProfileImageUrl = async (body: {
  profileImageUrl: Profile["profileImageUrl"];
}): Promise<{
  profileImageUrl: Profile["profileImageUrl"];
}> => {
  return fetchJson("/api/profile/profileImageUrl", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
};

export const putProfileAbout = async (body: {
  aboutData: Profile["aboutData"];
}): Promise<Profile["aboutData"]> => {
  return fetchJson("/api/profile/about", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
};

export const putPersonalDetails = async (body: {
  personalDetailsData: Profile["personalDetailsData"];
}): Promise<Profile["personalDetailsData"]> => {
  return fetchJson("/api/profile/personalDetails", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
};

export const newJobExperience = async (body: {
  jobExperience: Omit<JobExperience, "id">;
}): Promise<Profile["jobExperiencesData"]> => {
  return fetchJson("/api/profile/jobExperiences", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
};

export const editJobExperience = async (body: {
  jobExperience: JobExperience;
}): Promise<Profile["jobExperiencesData"]> => {
  return fetchJson(`/api/profile/jobExperiences/${body.jobExperience.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ jobExperience: body.jobExperience }),
  });
};

export const deleteJobExperience = async (body: {
  id: number;
}): Promise<Profile["jobExperiencesData"]> => {
  return fetchJson(`/api/profile/jobExperiences/${body.id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({}),
  });
};

export const updateJobExperiences = async (body: {
  jobExperienceData: Pick<Profile["jobExperiencesData"], "isPublic">;
}): Promise<Profile["jobExperiencesData"]> => {
  return fetchJson("/api/profile/jobExperiences", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
};

export const changeVisbility = async (body: VisibleReq) => {
  return fetchJson("/api/profile/visible", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
};
