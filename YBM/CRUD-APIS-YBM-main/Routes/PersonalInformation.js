import express from "express";
import { GetPersonalInformation, AddPersonalInformation, GetEmpPersonalInfoById, DelEmpPersonalInfoById, PatchEmpPersonalInfoById } from "../Controllers/PersonalInformation.js";
const router = express.Router();

router.get('/personalInformation', GetPersonalInformation)

router.post('/personalInformation', AddPersonalInformation)

router.get('/personalInformation/:id', GetEmpPersonalInfoById)

router.delete('/personalInformation/:id', DelEmpPersonalInfoById)
router.patch('/personalInformation/:id', PatchEmpPersonalInfoById)
export default router;