import { profileDBtoClient } from "lib/parsers";
import { PartialBy, Profile } from "lib/types";
import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "server/prisma";

export const getPersonalDetails = async (
  req: NextApiRequest,
  res: NextApiResponse<
    | PartialBy<Profile["personalDetailsData"], "personalDetails">
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
          jobExperiences: true,
        },
      });
      const profile: Profile = profileDBtoClient(profileDB);

      if (queryUsername?.length > 0 && !profile.personalDetailsData.isPublic) {
        res
          .status(200)
          .json({ isPublic: profile.personalDetailsData.isPublic });
        return;
      }
      res.json({
        ...profile.personalDetailsData,
      });
    } catch (error) {
      res.status(500).json({ message: (error as Error).message });
    }
  } else {
    res.status(401).json({ message: "unauthorized" });
  }
};

export const updatePersonalDetails = async (
  req: NextApiRequest,
  res: NextApiResponse<Profile["personalDetailsData"] | { message: string }>
) => {
  const { body } = req;
  const { personalDetailsData } = body as {
    personalDetailsData: Profile["personalDetailsData"];
  };
  if (req.session.user) {
    try {
      await prisma.profile.update({
        where: {
          username: req.session.user.username,
        },
        data: {
          personalDetails: JSON.stringify(personalDetailsData.personalDetails),
          personalDetailsIsPublic: personalDetailsData.isPublic,
        },
      });
      const profileDB = await prisma.profile.findFirstOrThrow({
        where: {
          username: req.session.user.username,
        },
        include: {
          jobExperiences: true,
        },
      });
      const profile: Profile = profileDBtoClient(profileDB);

      res.json({
        ...profile.personalDetailsData,
      });
    } catch (error) {
      res.status(500).json({ message: (error as Error).message });
    }
  } else {
    res.status(401).json({ message: "unauthorized" });
  }
};
