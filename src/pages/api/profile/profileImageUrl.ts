import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from "server/session";
import { NextApiRequest, NextApiResponse } from "next";
import { Profile } from "lib/types";
import {
  getProfileImageUrl,
  updateProfileImageUrl,
} from "server/controllers/profileImageUrl";

export default withIronSessionApiRoute(profileImageUrlRoute, sessionOptions);

async function profileImageUrlRoute(
  req: NextApiRequest,
  res: NextApiResponse<
    { profileImageUrl: Profile["profileImageUrl"] } | { message: string }
  >
) {
  const { method } = req;
  switch (method) {
    case "GET":
      await getProfileImageUrl(req, res);
      break;
    case "PUT":
      await updateProfileImageUrl(req, res);
      break;
    default:
      res.setHeader("Allow", ["GET", "PUT"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
