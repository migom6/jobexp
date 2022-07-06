import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "server/prisma";

// POST /api/user
// Required fields in body: name, email
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const result = await prisma.user.findMany();
  res.json(result);
}
