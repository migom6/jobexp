import { Profile, JobExperience, PartialBy } from "lib/types";
import { NextApiRequest, NextApiResponse } from "next";
import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from "server/session";
import {
  createJobExperience,
  getJobExperiences,
  updateJobExperiences,
} from "server/controllers/jobExperiences";
export default withIronSessionApiRoute(jobHandler, sessionOptions);

// CREATE A NEW JOBEXP
async function jobHandler(
  req: NextApiRequest,
  res: NextApiResponse<
    | PartialBy<Profile["jobExperiencesData"], "jobExperiences">
    | { message: string }
  >
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
      await updateJobExperiences(req, res);
      break;
    default:
      res.setHeader("Allow", ["GET", "POST", "PUT"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
