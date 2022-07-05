import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

const userData: Prisma.UserCreateInput[] = [
  {
    username: "admin",
    password: "admin",
    profile: {
      create: {},
    },
  },
  {
    username: "somveer",
    password: "somveer",
    profile: {
      create: {
        about: "I am a software engineer",
      },
    },
  },
];

async function main() {
  console.log(`Start seeding ...`);
  await prisma.user.deleteMany();
  for (const u of userData) {
    const user = await prisma.user.create({
      data: u,
    });
    console.log(`Created user with id: ${user.username}`);
  }
  console.log(`Seeding finished.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
