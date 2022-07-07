import { jobExperiencesClientToDB, profileDBtoClient } from "lib/parsers";
import { Profile, JobExperience } from "lib/types";
import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "server/prisma";
import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from "server/session";
import {
  deleteJobExperience,
  updateJobExperience,
} from "server/controllers/jobExperiences";
export default withIronSessionApiRoute(jobHandler, sessionOptions);

// UPDATE AND DELELTE JOB EXPERIENCE
async function jobHandler(
  req: NextApiRequest,
  res: NextApiResponse<Profile["jobExperiencesData"] | { message: string }>
) {
  const { method } = req;

  switch (method) {
    case "PUT":
      await updateJobExperience(req, res);
      break;
    case "DELETE":
      await deleteJobExperience(req, res);
      break;
    default:
      res.setHeader("Allow", ["PUT", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
