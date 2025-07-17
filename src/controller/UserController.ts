import type { Request, Response } from "express";
import { prisma } from "../database/prisma";
import { hash } from "bcryptjs";

export const createUser = async (req: Request, res: Response) => {
  const { name, email, password, accessName } = req.body;

  const existingUser = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  const isAccessName = await prisma.access.findUnique({
    where: {
      name: accessName,
    },
  });

  if (!isAccessName) {
    return res.status(400).json({ message: "Acesso não encontrado!" });
  }

  if (existingUser) {
    return res
      .status(400)
      .json({ message: "Usuario com esse email já existe!" });
  }

  const hashPassword = await hash(password, 10);

  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: hashPassword,
      Access: {
        connectOrCreate: {
          where: { name: accessName },
          create: { name: accessName },
        },
      },
    },
    select: {
      name: true,
      email: true,
      Access: {
        select: {
          name: true,
        },
      },
    },
  });
  return res.json(user);
};

export const deleteManyUsers = async (req: Request, res: Response) => {
  await prisma.user.deleteMany();

  return res.json({ message: "Todos usuarios deletados com sucesso!" });
};
