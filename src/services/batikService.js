const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getAllBatiks = async () => {
  return await prisma.batik.findMany({
    select: {
      batik_id: true,
      image: true, 
      batik_name: true,
      batik_history: true,
    },
  });
};

const getBatikById = async (id) => {
  return await prisma.batik.findUnique({
    where: { batik_id: parseInt(id) },
    select: {
      image: true,
      batik_name: true,
      batik_origin: true,
      batik_meaning: true,
      batik_history: true,
    },
  });
};

const getBatikByName = async (name) => {
  return await prisma.batik.findFirst({
    where: { batik_name: name },
    select: {
      image: true,
      batik_name: true,
      batik_origin: true,
      batik_meaning: true,
      batik_history: true,
    },
  });
};

module.exports = {
  getAllBatiks,
  getBatikById,
  getBatikByName,
};