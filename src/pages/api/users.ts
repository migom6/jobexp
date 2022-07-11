import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "server/prisma";

// POST /api/user
// Required fields in body: name, email
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const result = await prisma.profile.findMany({
    select: {
      username: true,
      profileImageUrl: true,
    },
  });
  res.json(result);
}
