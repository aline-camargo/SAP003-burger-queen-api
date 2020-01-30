import OrderService from '../services/OrderService';
import Util from '../utils/Utils';

const util = new Util()

class OrderController {
  static async getAllOrders(req, res) {
    try {
      const allOrders = await OrderService.getAllOrders()
      if (allOrders.length > 0) {
        util.setSuccess(200, 'Orders retrieved', allOrders);
      } else {
        util.setSuccess(200, 'No orders found');
      }
      return util.send(res)
    } catch (error) {
      util.setError(400, error)
      return util.send(res)
    }
  }

  static async addOrder(req, res) {
    if (!req.body.TableId || !req.body.status_order) {
      util.setError(400, 'Please provide complete details')
      return util.send(res)
    }
    const newOrder = req.body
    try {
      const createdOrder = await OrderService.addOrder(newOrder)
      util.setSuccess(201, 'Order added!', createdOrder)
      return util.send(res)
    } catch (error) {
      util.setError(400, error.message)
      return util.send(res)
    }
  }

  static async updatedOrder(req, res) {
    const alteredOrder = req.body
    const { id } = req.params
    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value')
      return util.send(res)
    }
    try {
      const updateOrder = await OrderService.updateOrder(id, alteredOrder)
      if (!updateOrder) {
        util.setError(404, `Cannot find order with the id: ${id}`)
      } else {
        util.setSuccess(200, 'Order updated', updateOrder)
      }
      return util.send(res)
    } catch (error) {
      util.setError(404, error)
      return util.send(res)
    }
  }

  static async getOrder(req, res) {
    const { id } = req.params

    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value')
      return util.send(res)
    }

    try {
      const theOrder = await OrderService.getOrder(id)

      if (!theOrder) {
        util.setError(404, `Cannot find order with the id ${id}`)
      } else {
        util.setSuccess(200, 'Found order', theOrder)
      }
      return util.send(res)
    } catch (error) {
      util.setError(404, error)
      return util.send(res)
    }
  }

  static async deleteOrder(req, res) {
    const { id } = req.params

    if (!Number(id)) {
      util.setError(400, 'Please provide a numeric value')
      return util.send(res)
    }

    try {
      const orderToDelete = await OrderService.deleteOrder(id)

      if (orderToDelete) {
        util.setSuccess(200, 'Order deleted')
      } else {
        util.setError(404, `Order with the id ${id} cannot be found`)
      }
      return util.send(res)
    } catch (error) {
      util.setError(400, error)
      return util.send(res)
    }
  }

  static async getAllOrdersItens(req, res) {
    try {
      const allOrdersItens = await OrderService.getAllOrdersItens()
      if (allOrdersItens.length > 0) {
        util.setSuccess(200, 'Orders itens retrieved', allOrdersItens);
      } else {
        util.setSuccess(200, 'No orders itens found');
      }
      return util.send(res)
    } catch (error) {
      util.setError(400, error)
      return util.send(res)
    }
  }

  static async getItensOfOrder(req, res) {
    const id = req.params.id;
    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value')
      return util.send(res)
    }
    try {
      const theOrderItens = await OrderService.getItensOfOrder(id);

      if (!theOrderItens) {
        util.setError(404, `Cannot find order with the id ${id}`)
      } else {
        util.setSuccess(200, 'Found order itens', theOrderItens)
      }
      return util.send(res)
    } catch (error) {
      util.setError(404, error)
      return util.send(res)

    }
  }

  static async addOrderItens(req, res) {
    if (!req.body.ProductId || !req.body.status_item || !req.body.OrderId) {
      util.setError(400, 'Please provide complete details')
      return util.send(res)
    }

    const newOrderItem = req.body

    try {
      const createdOrderItem = await OrderService.addOrderItens(newOrderItem)
      util.setSuccess(201, 'Order item added!', createdOrderItem)
      return util.send(res)
    } catch (error) {
      util.setError(400, error.message)
      return util.send(res)
    }
  }

  static async updatedOrderItem(req, res) {
    const alteredOrderItem = req.body
    const { id } = req.params
    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value')
      return util.send(res)
    }
    try {
      const updateOrderItem = await OrderService.updateOrderItem(id, alteredOrderItem)
      if (!updateOrderItem) {
        util.setError(404, `Cannot find order with the id: ${id}`)
      } else {
        util.setSuccess(200, 'Order item updated', updateOrderItem)
      }
      return util.send(res)
    } catch (error) {
      util.setError(404, error)
      return util.send(res)
    }
  }

  static async deleteOrderItem(req, res) {
    const { id } = req.params

    if (!Number(id)) {
      util.setError(400, 'Please provide a numeric value')
      return util.send(res)
    }

    try {
      const orderItemToDelete = await OrderService.deleteOrderItem(id)

      if (orderItemToDelete) {
        util.setSuccess(200, 'Order item deleted')
      } else {
        util.setError(404, `Order item with the id ${id} cannot be found`)
      }
      return util.send(res)
    } catch (error) {
      util.setError(400, error)
      return util.send(res)
    }
  }

  static async getOrderItem(req, res) {
    const { id } = req.params

    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value')
      return util.send(res)
    }

    try {
      const theOrderItem = await OrderService.getOrderItem(id)

      if (!theOrderItem) {
        util.setError(404, `Cannot find order item with the id ${id}`)
      } else {
        util.setSuccess(200, 'Found order', theOrderItem)
      }
      return util.send(res)
    } catch (error) {
      util.setError(404, error)
      return util.send(res)
    }
  }

}

export default OrderController;