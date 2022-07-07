import { jobExperiencesClientToDB, profileDBtoClient } from "lib/parsers";
import { Profile, JobExperience } from "lib/types";
import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "server/prisma";
import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from "server/session";
export default withIronSessionApiRoute(jobHandler, sessionOptions);

// UPDATE AND DELELTE JOB EXPERIENCE
async function jobHandler(
  req: NextApiRequest,
  res: NextApiResponse<Profile | { message: string }>
) {
  const { query, body, method } = req;
  const { id } = query as { id: string };
  const { jobExperience } = body as {
    jobExperience: JobExperience;
  };
  switch (method) {
    case "PUT":
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
      break;
    case "DELETE":
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
      break;
    default:
      res.setHeader("Allow", ["PUT", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
