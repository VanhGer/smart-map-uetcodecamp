import express from 'express'
import { createBuilding } from '../controllers/buildingController.js';
const router = express.Router();


router.post('/building',createBuilding)
export default router;