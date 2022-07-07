import { jobExperiencesClientToDB, profileDBtoClient } from "lib/parsers";
import { Profile, JobExperience } from "lib/types";
import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "server/prisma";

// CREATE A NEW JOBEXP
export default async function jobHandler(
  req: NextApiRequest,
  res: NextApiResponse<Profile | { message: string }>
) {
  const { body, method } = req;
  const { jobExperience } = body as { jobExperience: JobExperience };
  switch (method) {
    case "POST":
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
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
