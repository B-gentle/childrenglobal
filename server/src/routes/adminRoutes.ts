import express from "express"
import { protect } from "../middleware/authMiddleware"
import { createAdmin, deleteAdmin, getAdminById, getAllAdmins, loginAdmin, updateAdmin } from "../controllers/adminController"

const router = express.Router()

router.post("/login", loginAdmin)
router.post("/", protect, createAdmin)
router.get("/", protect, getAllAdmins)
router.get("/:id", protect, getAdminById)
router.delete("/:id", protect, deleteAdmin)
router.put("/:id", protect, updateAdmin)

export default router