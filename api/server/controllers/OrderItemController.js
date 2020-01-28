import OrderItemService from '../services/OrderItemService';
import Util from '../utils/Utils';

const util = new Util()

class OrderItensController {
  static async getAllOrderItens(req, res) {
    try {
      const allOrdersItens = await OrderItemService.getAllOrderItens()
      if (allOrdersItens.length > 0) {
        util.setSuccess(200, 'Orders itens retrieved', allOrdersItens);
      } else {
        util.setSuccess(200, 'No orders itens found');
      }
      return util.send(res)
    } catch (error) {
        console.log(error)
      util.setError(400, error)
      return util.send(res)
    }
  }

  static async addOrderItem(req, res) {
    if (!req.body.ProductId || !req.body.status_item || !req.body.OrderId) {
      util.setError(400, 'Please provide complete details')
      return util.send(res)
    }
    const newOrderItem = req.body
    try {
      const createdOrderItem = await OrderItemService.addOrderItem(newOrderItem)
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
      const updateOrderItem = await OrderItemService.updateOrderItem(id, alteredOrderItem)
      if (!updateOrderItem) {
        util.setError(404, `Cannot find order item with the id: ${id}`)
      } else {
        util.setSuccess(200, 'Order item updated', updateOrderItem)
      }
      return util.send(res)
    } catch (error) {
      util.setError(404, error)
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
      const theOrderItem = await OrderItemService.getOrderItem(id)

      if (!theOrderItem) {
        util.setError(404, `Cannot find order item with the id ${id}`)
      } else {
        util.setSuccess(200, 'Found order item', theOrderItem)
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
      const orderItemToDelete = await OrderItemService.deleteOrderItem(id)

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
}

export default OrderItensController;