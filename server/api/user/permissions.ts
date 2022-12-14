import pkg from '@prisma/client';
const { PrismaClient } = pkg;

const prisma = new PrismaClient({
  log: ['query']
})
// const prisma = new PrismaClient();

export default defineEventHandler( async () => {
  return await prisma.sys_links.findMany();
})