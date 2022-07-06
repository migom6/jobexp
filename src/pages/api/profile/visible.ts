import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from "server/session";
import { NextApiRequest, NextApiResponse } from "next";
import { VisibleReq } from "lib/api";
import { Profile } from "lib/types";
import { prisma } from "server/prisma";
import { profileDBtoClient } from "lib/parsers";

export default withIronSessionApiRoute(visibleRoute, sessionOptions);

async function visibleRoute(
  req: NextApiRequest,
  res: NextApiResponse<Profile | { message: string }>
) {
  const { section, visible } = req.body as VisibleReq;

  if (req.session.user) {
    try {
      let dbPayload: Record<string, boolean>;
      switch (section) {
        case "about":
          dbPayload = { aboutIsPublic: visible };
          break;
        case "experiences":
          dbPayload = { jobExperiencesIsPublic: visible };
          break;
        case "personalDetails":
          dbPayload = { personalDetailsIsPublic: visible };
          break;
        default:
          dbPayload = {};
      }
      console.log(dbPayload);

      const profileDB = await prisma.profile.update({
        where: {
          username: req.session.user.username,
        },
        data: {
          ...dbPayload,
        },
        include: {
          jobExperiences: true,
        },
      });
      const profile: Profile = profileDBtoClient(profileDB);
      res.json({
        ...profile,
      });
    } catch (error) {
      res.status(500).json({ message: (error as Error).message });
    }
  } else {
    res.status(401).json({ message: "unauthorized" });
  }
}
