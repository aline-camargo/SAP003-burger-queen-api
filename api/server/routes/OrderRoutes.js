import { Router } from 'express';
import OrderController from '../controllers/OrderController';

const router = Router();
router.get('/', OrderController.getAllOrders);
router.get('/items/:id', OrderController.getItensOfOrder);
router.post('/', OrderController.addOrder);
router.post('/items', OrderController.addOrderItens);
router.get('/:id', OrderController.getOrder);
router.put('/:id', OrderController.updatedOrder);
router.delete('/:id', OrderController.deleteOrder);

export default router;
