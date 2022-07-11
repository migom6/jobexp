import { jobExperiencesClientToDB, profileDBtoClient } from "lib/parsers";
import { JobExperience, PartialBy, Profile } from "lib/types";
import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "server/prisma";

export const getJobExperiences = async (
  req: NextApiRequest,
  res: NextApiResponse<
    | PartialBy<Profile["jobExperiencesData"], "jobExperiences">
    | { message: string }
  >
) => {
  const queryUsername = req.query.username as string;

  if (req.session.user || queryUsername?.length > 0) {
    try {
      const profileDB = await prisma.profile.findFirstOrThrow({
        where: {
          username:
            queryUsername?.length > 0
              ? queryUsername
              : req.session.user!.username,
        },
        include: {
          jobExperiences: {
            orderBy: [{ endDate: "desc" }, { startDate: "desc" }],
          },
        },
      });
      const profile: Profile = profileDBtoClient(profileDB);
      if (queryUsername?.length > 0 && !profile.jobExperiencesData.isPublic) {
        res.status(200).json({ isPublic: profile.jobExperiencesData.isPublic });
        return;
      }
      res.json({
        ...profile.jobExperiencesData,
      });
    } catch (error) {
      res.status(404).json({ message: (error as Error).message });
    }
  } else {
    res.status(401).json({ message: "unauthorized" });
  }
};

export const createJobExperience = async (
  req: NextApiRequest,
  res: NextApiResponse<Profile["jobExperiencesData"] | { message: string }>
) => {
  const { body } = req;
  const { jobExperience } = body as { jobExperience: JobExperience };
  if (req.session.user) {
    try {
      await prisma.jobExperience.create({
        data: {
          username: req.session.user.username,
          ...jobExperiencesClientToDB(jobExperience),
        },
      });
      const profileDB = await prisma.profile.findFirstOrThrow({
        where: {
          username: req.session.user.username,
        },
        include: {
          jobExperiences: {
            orderBy: [{ endDate: "desc" }, { startDate: "desc" }],
          },
        },
      });
      const profile: Profile = profileDBtoClient(profileDB);
      res.json({
        ...profile.jobExperiencesData,
      });
    } catch (error) {
      res.status(500).json({ message: (error as Error).message });
    }
  } else {
    res.status(401).json({ message: "unauthorized" });
  }
};

export const updateJobExperience = async (
  req: NextApiRequest,
  res: NextApiResponse<Profile["jobExperiencesData"] | { message: string }>
) => {
  const { query, body } = req;
  const { id } = query as { id: string };
  const { jobExperience } = body as {
    jobExperience: JobExperience;
  };
  if (req.session.user) {
    try {
      await prisma.jobExperience.update({
        where: {
          id: parseInt(id),
        },
        data: {
          username: req.session.user.username,
          ...jobExperiencesClientToDB(jobExperience),
        },
      });
      const profileDB = await prisma.profile.findFirstOrThrow({
        where: {
          username: req.session.user.username,
        },
        include: {
          jobExperiences: {
            orderBy: [{ endDate: "desc" }, { startDate: "desc" }],
          },
        },
      });
      const profile: Profile = profileDBtoClient(profileDB);
      res.json({
        ...profile.jobExperiencesData,
      });
    } catch (error) {
      res.status(500).json({ message: (error as Error).message });
    }
  } else {
    res.status(401).json({ message: "unauthorized" });
  }
};

// just to update visibility
export const updateJobExperiences = async (
  req: NextApiRequest,
  res: NextApiResponse<Profile["jobExperiencesData"] | { message: string }>
) => {
  const { body } = req;
  const { jobExperienceData } = body as {
    jobExperienceData: Pick<Profile["jobExperiencesData"], "isPublic">;
  };
  if (req.session.user) {
    try {
      await prisma.profile.update({
        where: {
          username: req.session.user.username,
        },
        data: {
          jobExperiencesIsPublic: jobExperienceData.isPublic,
        },
      });
      const profileDB = await prisma.profile.findFirstOrThrow({
        where: {
          username: req.session.user.username,
        },
        include: {
          jobExperiences: {
            orderBy: [{ endDate: "desc" }, { startDate: "desc" }],
          },
        },
      });
      const profile: Profile = profileDBtoClient(profileDB);
      res.json({
        ...profile.jobExperiencesData,
      });
    } catch (error) {
      res.status(500).json({ message: (error as Error).message });
    }
  } else {
    res.status(401).json({ message: "unauthorized" });
  }
};

export const deleteJobExperience = async (
  req: NextApiRequest,
  res: NextApiResponse<Profile["jobExperiencesData"] | { message: string }>
) => {
  const { query } = req;
  const { id } = query as { id: string };

  if (req.session.user) {
    try {
      await prisma.jobExperience.delete({
        where: {
          id: parseInt(id),
        },
      });
      const profileDB = await prisma.profile.findFirstOrThrow({
        where: {
          username: req.session.user.username,
        },
        include: {
          jobExperiences: {
            orderBy: [{ endDate: "desc" }, { startDate: "desc" }],
          },
        },
      });
      const profile: Profile = profileDBtoClient(profileDB);
      res.json({
        ...profile.jobExperiencesData,
      });
    } catch (error) {
      res.status(500).json({ message: (error as Error).message });
    }
  } else {
    res.status(401).json({ message: "unauthorized" });
  }
};
