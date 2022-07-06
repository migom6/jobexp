import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from "server/session";
import { NextApiRequest, NextApiResponse } from "next";
import type { User } from "lib/types";

export default withIronSessionApiRoute(logoutRoute, sessionOptions);

function logoutRoute(req: NextApiRequest, res: NextApiResponse<User>) {
  req.session.destroy();
  res.json({ isLoggedIn: false, username: "" });
}
