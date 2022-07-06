import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from "server/session";
import { NextApiRequest, NextApiResponse } from "next";
import { VisibleReq } from "lib/api";
import { PersonalDetails, Profile } from "lib/types";
import { prisma } from "server/prisma";
import { profileDBtoClient } from "lib/parsers";

export default withIronSessionApiRoute(visibleRoute, sessionOptions);

async function visibleRoute(
  req: NextApiRequest,
  res: NextApiResponse<Profile | { message: string }>
) {
  const { personalDetails } = req.body as { personalDetails?: PersonalDetails };

  if (req.session.user) {
    try {
      const profileDB = await prisma.profile.update({
        where: {
          username: req.session.user.username,
        },
        data: {
          personalDetails: JSON.stringify(personalDetails),
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
