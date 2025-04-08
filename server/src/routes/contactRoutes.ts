import express from 'express'
import { protect } from '../middleware/authMiddleware'
import { createContactInfo, updateContactInfo } from '../controllers/contactController'

const router = express.Router()

router.post('/', protect, createContactInfo)
router.put('/', protect, updateContactInfo)

export default router