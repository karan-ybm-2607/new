import express from "express";
import { GetOrganizationInfo, AddOrganizaionInfo, GetOrgInfoById, DelOrgInfoById, PatchOrgInfoById } from "../Controllers/BasicInformation.js";
const router = express.Router();

router.get('/OrganizationInformation', GetOrganizationInfo)

router.post('/OrganizationInformation', AddOrganizaionInfo)

router.get('/:id', GetOrgInfoById)

router.delete('/:id', DelOrgInfoById)
router.patch('/:id', PatchOrgInfoById)
export default router;