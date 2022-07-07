import { profileDBtoClient } from "lib/parsers";
import { Profile } from "lib/types";
import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "server/prisma";

export const getProfileImageUrl = async (
  req: NextApiRequest,
  res: NextApiResponse<
    { profileImageUrl: Profile["profileImageUrl"] } | { message: string }
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
      res.json({
        profileImageUrl: profile.profileImageUrl,
      });
    } catch (error) {
      res.status(500).json({ message: (error as Error).message });
    }
  } else {
    res.status(401).json({ message: "unauthorized" });
  }
};

export const updateProfileImageUrl = async (
  req: NextApiRequest,
  res: NextApiResponse<
    { profileImageUrl: Profile["profileImageUrl"] } | { message: string }
  >
) => {
  const { body } = req;
  const { profileImageUrl } = body as {
    profileImageUrl: Profile["profileImageUrl"];
  };
  if (req.session.user) {
    try {
      await prisma.profile.update({
        where: {
          username: req.session.user.username,
        },
        data: {
          username: req.session.user.username,
          profileImageUrl: profileImageUrl,
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
        profileImageUrl: profile.profileImageUrl,
      });
    } catch (error) {
      res.status(500).json({ message: (error as Error).message });
    }
  } else {
    res.status(401).json({ message: "unauthorized" });
  }
};
