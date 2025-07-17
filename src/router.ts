import { Router } from "express";
import { createUser, deleteManyUsers } from "./controller/UserController";
import { createAccess, getAllAccesses } from "./controller/AccessController";

export const router = Router();

router.post("/user", createUser);
router.post("/access", createAccess);
router.get("/accesses", getAllAccesses);
router.delete("/deleteManyUsers", deleteManyUsers);
