import express from "express"
import { GetPromotionalInformation, AddPromotionalInformation, GetEmpPromotionalInfoById, DelEmpPromotionalInfoById, PatchEmpPromotionalInfoById } from '../Controllers/PromotionalDetails.js'
const router = express.Router();
router.get('/Promotional', GetPromotionalInformation)

router.post('/Promotional', AddPromotionalInformation)

router.get('/Promotional/:id', GetEmpPromotionalInfoById)

router.delete('/Promotional/:id', DelEmpPromotionalInfoById)
router.patch('/Promotional/:id', PatchEmpPromotionalInfoById)
export default router;