import { connect } from "bun";
import type { Request, Response } from "express";
import { prisma } from "../database/prisma";

export const createStore = async (req: Request, res: Response) => {
  const { name } = req.body;
  const { userId } = req.params;

  const isUser = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  if (!isUser) {
    return res.status(404).json({ error: "Usuario nao existe" });
  }
  const store = await prisma.store.create({
    data: {
      name,
      user: {
        connect: { id: userId },
      },
    },
  });
  return res.json(store);
};
