import { Router } from 'express';
import OrderController from '../controllers/OrderController';

const router = Router();
router.get('/', OrderController.getAllOrders);
router.get('/itens/:id', OrderController.getItensOfOrder);
router.get('/itens', OrderController.getAllOrdersItens);
router.get('/item/:id', OrderController.getOrderItem);
router.post('/', OrderController.addOrder);
router.post('/itens', OrderController.addOrderItens);
router.get('/:id', OrderController.getOrder);
router.put('/:id', OrderController.updatedOrder);
router.put('/itens/:id', OrderController.updatedOrderItem);
router.delete('/:id', OrderController.deleteOrder);
router.delete('/itens/:id', OrderController.deleteOrderItem);

export default router;
