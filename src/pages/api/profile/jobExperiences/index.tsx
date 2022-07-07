import { Profile, JobExperience } from "lib/types";
import { NextApiRequest, NextApiResponse } from "next";
import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from "server/session";
import {
  createJobExperience,
  getJobExperiences,
} from "server/controllers/jobExperiences";
export default withIronSessionApiRoute(jobHandler, sessionOptions);

// CREATE A NEW JOBEXP
async function jobHandler(
  req: NextApiRequest,
  res: NextApiResponse<Profile["jobExperiencesData"] | { message: string }>
) {
  const { method } = req;
  switch (method) {
    case "GET":
      await getJobExperiences(req, res);
      break;
    case "POST":
      await createJobExperience(req, res);
      break;
    case "PUT":
      // @TODO update job experience visibility
      break;
    default:
      res.setHeader("Allow", ["GET", "POST", "PUT"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
