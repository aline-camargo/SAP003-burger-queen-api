import { Router } from 'express';
import OrderItemController from '../controllers/OrderItemController';

const router = Router();
router.get('/', OrderItemController.getAllOrderItens);
router.post('/', OrderItemController.addOrderItem);
router.get('/:id', OrderItemController.getOrderItem);
router.put('/:id', OrderItemController.updatedOrderItem);
router.delete('/:id', OrderItemController.deleteOrderItem);

export default router;
