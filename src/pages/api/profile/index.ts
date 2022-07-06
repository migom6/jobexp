import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from "server/session";
import { Profile } from "lib/types";
import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "server/prisma";
import { profileDBtoClient } from "lib/parsers";

export default withIronSessionApiRoute(profileRoute, sessionOptions);

async function profileRoute(
  req: NextApiRequest,
  res: NextApiResponse<Profile | { message: string }>
) {
  if (req.session.user) {
    // in a real world application you might read the user id from the session and then do a database request
    // to get more information on the user if needed
    try {
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
        ...profile,
      });
    } catch (error) {
      res.status(500).json({ message: (error as Error).message });
    }
  } else {
    res.status(401).json({ message: "unauthorized" });
  }
}
