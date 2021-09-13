import express from "express"
import { GetEmploymentInformation, AddEmployementInformation, GetEmpEmployementInfoById, DelEmpEmployementInfoById, PatchEmpEmployementInfoById } from '../Controllers/EmployeementDetails.js'
const router = express.Router();
router.get('/Employement', GetEmploymentInformation)

router.post('/Employement', AddEmployementInformation)

router.get('/Employement/:id', GetEmpEmployementInfoById)

router.delete('/Employement/:id', DelEmpEmployementInfoById)
router.patch('/Employement/:id', PatchEmpEmployementInfoById)
export default router;