import { Router } from 'express';

import OrderController from '../controllers/order.controller';


const router = Router();

router.get('/', OrderController.getAllOrders);
router.post('/', OrderController.addAnOrder);

export default router;
