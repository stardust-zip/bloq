import { Router } from "express";
import * as PostController from "./posts.controller.js";

const router = Router();

router.get("/", PostController.handleGetAllPost);
router.get("/:id", PostController.handleGetPostById);
router.post("/", PostController.handleCreatePost);
router.put("/:id", PostController.handleUpdatePost);
router.delete("/:id", PostController.handleDeletePost);

export default router;
