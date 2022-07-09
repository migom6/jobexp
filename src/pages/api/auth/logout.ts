import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from "server/session";
import { NextApiRequest, NextApiResponse } from "next";
import type { User } from "lib/types";

export default withIronSessionApiRoute(logoutRoute, sessionOptions);

function logoutRoute(req: NextApiRequest, res: NextApiResponse<User>) {
  req.session.destroy();
  // https://github.com/vvo/iron-session/issues/274
  res.setHeader("cache-control", "no-store, max-age=0");
  res.json({ isLoggedIn: false, username: "" });
}
