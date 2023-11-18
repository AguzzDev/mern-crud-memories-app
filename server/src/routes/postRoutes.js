import express from "express";
import {
  createPost,
  deletePost,
  fetchPosts,
  fetchPostsBySearch,
  likePost,
  updatePost,
} from "../controllers/postControllers.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", authMiddleware, fetchPosts);
router.get("/search", authMiddleware, fetchPostsBySearch);
router.post("/", authMiddleware, createPost);
router.patch("/:id", authMiddleware, updatePost);
router.patch("/:id/like", authMiddleware, likePost);
router.delete("/:id", authMiddleware, deletePost);

export default router;
