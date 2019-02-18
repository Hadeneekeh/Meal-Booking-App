import OrderService from '../services/order.service';

const OrderController = {
  getAllOrders(req, res) {
    const allOrders = OrderService.getAllOrders();
    return res.status(200).json({
      status: 'success',
      data: allOrders,
    });
  },
  addAnOrder(req, res) {
    const newOrder = req.body;
    const createdOrder = OrderService.addOrder(newOrder);
    return res.status(201).json({
      status: 'success',
      data: createdOrder,
    });
  },
};

export default OrderController;
