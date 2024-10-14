import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.user.upsert({
    where: { email: 'firstuser@email.com' },
    update: {},
    create: {
      email: 'firstuser@email.com',
      username: 'FirstUser',
      password: '123',
      documents: {
        createMany: {
          data: [{ title: 'Document #1' }, { title: 'Document #2' }],
        },
      },
    },
  });

  await prisma.user.upsert({
    where: { email: 'seconduser@email.com' },
    update: {},
    create: {
      email: 'seconduser@email.com',
      username: 'SecondUser',
      password: '123',
      documents: {
        createMany: {
          data: [{ title: 'Document #1' }, { title: 'Document #2' }],
        },
      },
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
