import express from "express";
import {
  addVideo,
  updateVideo,
  deleteVideo,
  getVideo,
  addview,
  random,
  trend,
  subscribe,
  getByTag,
  search,
} from "./../controllers/video.js";
import { verifyToken } from "./../verifyToken.js";

const router = express.Router();

router.post("/upload", verifyToken, addVideo);
router.put("/:id", verifyToken, updateVideo);
router.delete("/:id", verifyToken, deleteVideo);
router.get("/find/:id", getVideo);
router.put("/view/:id", addview);
router.get("/trend", trend);
router.get("/random", random);
router.get("/sub", verifyToken, subscribe);
router.get("/tags", getByTag);
router.get("/search", search);

export default router;
