import { Router } from "express";
import * as PostController from "./posts.controller.js";
import { validate } from "../middleware/validation.middleware.js";
import { postSchema } from "./posts.schema.js";

const router = Router();

router.get("/", PostController.handleGetAllPost);
router.get("/:id", PostController.handleGetPostById);
router.post("/", validate(postSchema), PostController.handleCreatePost);
router.put("/:id", validate(postSchema), PostController.handleUpdatePost);
router.delete("/:id", PostController.handleDeletePost);

export default router;
