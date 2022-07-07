import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from "server/session";
import { NextApiRequest, NextApiResponse } from "next";
import { Profile } from "lib/types";
import { getAbout, updateAbout } from "server/controllers/about";

export default withIronSessionApiRoute(aboutRoute, sessionOptions);

async function aboutRoute(
  req: NextApiRequest,
  res: NextApiResponse<Profile["aboutData"] | { message: string }>
) {
  const { method } = req;
  switch (method) {
    case "GET":
      await getAbout(req, res);
      break;
    case "PUT":
      await updateAbout(req, res);
      break;
    default:
      res.setHeader("Allow", ["GET", "PUT"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
