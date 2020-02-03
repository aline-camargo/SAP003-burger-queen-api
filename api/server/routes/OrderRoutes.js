import { Router } from 'express';
import OrderController from '../controllers/OrderController';

const router = Router();
router.get('/', OrderController.getAllOrders);
router.get('/items/:id', OrderController.getItensOfOrder);
// router.get('/itens', OrderController.getAllOrdersItens);
// router.get('/item/:id', OrderController.getOrderItem);
router.post('/', OrderController.addOrder);
router.post('/items', OrderController.addOrderItens);
router.get('/:id', OrderController.getOrder);
router.put('/:id', OrderController.updatedOrder);
// router.put('/itens/:id', OrderController.updatedOrderItem);
router.delete('/:id', OrderController.deleteOrder);
// router.delete('/itens/:id', OrderController.deleteOrderItem);

export default router;
