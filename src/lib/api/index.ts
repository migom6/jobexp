import { JobExperience, PersonalDetails, Profile } from "lib/types";

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
  return fetch("/api/auth/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
};

export const login = async (body: LoginForm) => {
  return fetch("/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
};

export const logout = async () => {
  return fetch("/api/auth/logout");
};

export const putProfileImageUrl = async (body: {
  profileImageUrl: Profile["profileImageUrl"];
}) => {
  try {
    const res = await fetch("/api/profile/profileImageUrl", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (res.status === 400) {
      throw new Error("Not allowed");
    }
    return await res.json();
  } catch (e) {
    throw e;
  }
};

export const putProfileAbout = async (body: {
  aboutData: Profile["aboutData"];
}) => {
  try {
    const res = await fetch("/api/profile/about", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (res.status === 400) {
      throw new Error("Not allowed");
    }
    return await res.json();
  } catch (e) {
    throw e;
  }
};

export const putPersonalDetails = async (body: {
  personalDetailsData: Profile["personalDetailsData"];
}) => {
  try {
    const res = await fetch("/api/profile/personalDetails", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (res.status === 400) {
      throw new Error("Not allowed");
    }
    return await res.json();
  } catch (e) {
    throw e;
  }
};

export const newJobExperience = async (body: {
  jobExperience: Omit<JobExperience, "id">;
}) => {
  try {
    const res = await fetch("/api/profile/jobExperiences", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (res.status === 400) {
      throw new Error("Not allowed");
    }
    return await res.json();
  } catch (e) {
    throw e;
  }
};

export const editJobExperience = async (body: {
  jobExperience: JobExperience;
}) => {
  try {
    const res = await fetch(
      `/api/profile/jobExperiences/${body.jobExperience.id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ jobExperience: body.jobExperience }),
      }
    );

    if (res.status === 400) {
      throw new Error("Not allowed");
    }
    return await res.json();
  } catch (e) {
    throw e;
  }
};

export const deleteJobExperience = async (body: { id: number }) => {
  try {
    const res = await fetch(`/api/profile/jobExperiences/${body.id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({}),
    });

    if (res.status === 400) {
      throw new Error("Not allowed");
    }
    return await res.json();
  } catch (e) {
    throw e;
  }
};

export const updateJobExperiences = async (body: {
  jobExperienceData: Pick<Profile["jobExperiencesData"], "isPublic">;
}) => {
  try {
    const res = await fetch("/api/profile/jobExperiences", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (res.status === 400) {
      throw new Error("Not allowed");
    }
    return await res.json();
  } catch (e) {
    throw e;
  }
};

export const changeVisbility = async (body: VisibleReq) => {
  try {
    const res = await fetch("/api/profile/visible", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (res.status === 400) {
      throw new Error("Not allowed");
    }
    return await res.json();
  } catch (e) {
    throw e;
  }
};
