import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from "server/session";
import { NextApiRequest, NextApiResponse } from "next";
import { Profile } from "lib/types";
import {
  getPersonalDetails,
  updatePersonalDetails,
} from "server/controllers/personalDetails";

export default withIronSessionApiRoute(personalDetailsRoute, sessionOptions);

async function personalDetailsRoute(
  req: NextApiRequest,
  res: NextApiResponse<Profile["personalDetailsData"] | { message: string }>
) {
  const { method } = req;
  switch (method) {
    case "GET":
      await getPersonalDetails(req, res);
      break;
    case "PUT":
      await updatePersonalDetails(req, res);
      break;
    default:
      res.setHeader("Allow", ["GET", "PUT"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
