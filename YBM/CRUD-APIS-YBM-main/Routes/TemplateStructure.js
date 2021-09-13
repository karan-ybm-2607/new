import express from "express";
import { GetSalaryTemplate, CreateSalaryTemplate, GetSalaryStrById, DeleteSalaryStrById, UpdateSalaryStrById } from '../Controllers/TemplateStructure.js';
const router = express.Router();

router.get('/SalaryTemplate', GetSalaryTemplate)

router.post('/SalaryTemplate', CreateSalaryTemplate)

router.get('/:id', GetSalaryStrById)

router.delete('/:id', DeleteSalaryStrById)

router.patch('/:id', UpdateSalaryStrById)
export default router