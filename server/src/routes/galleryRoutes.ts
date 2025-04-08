import express from "express";
import { getGalleryItems, uploadGalleryImage } from "../controllers/galleryController";
import { protect } from "../middleware/authMiddleware";
import upload from "../middleware/uploadMiddleware";

const router = express.Router();

router.post("/", upload.single('img'), protect, uploadGalleryImage);
router.get("/",  getGalleryItems);

export default router;
