import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from "server/session";
import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "server/prisma";

export default withIronSessionApiRoute(signupRoute, sessionOptions);

async function signupRoute(req: NextApiRequest, res: NextApiResponse) {
  const { username, password } = await req.body;

  try {
    if (username.length === 0 || password.length === 0) {
      throw new Error("Username or password is empty");
    }
    //@TODO use bcrypt to hash the password
    // will throw error if already exists
    const user = await prisma.user.create({
      data: {
        username,
        password,
        profile: {
          create: {},
        },
      },
    });
    req.session.user = { ...user, isLoggedIn: true };
    await req.session.save();
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
}
