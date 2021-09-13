import express from "express";
import { GetEmployeeDetails, GetEmployeeById, CreateEmployeeDetail, DeleteEmployeeById, UpdateEmployeeDetailsById } from "../Controllers/EmployeeDetails.js";
const router = express.Router();

router.get('/EmployeeData', GetEmployeeDetails)

router.post('/EmployeeData', CreateEmployeeDetail)

router.get('/:id', GetEmployeeById)

router.delete('/:id', DeleteEmployeeById)

router.patch('/:id', UpdateEmployeeDetailsById)
export default router