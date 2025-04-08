// src/routes/employeeRoutes.ts

import { Router } from 'express';
import { addFullTimeEmployee, addPartTimeEmployee } from '../controllers/userControler.ts';

const router = Router();

// Define routes for adding full-time and part-time employees
router.post('/employees/fulltime', addFullTimeEmployee);
router.post('/employees/parttime', addPartTimeEmployee);

export default router;