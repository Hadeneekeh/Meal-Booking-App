import OrderService from '../services/order.service';

const OrderController = {
  getAllOrders(req, res) {
    const allOrders = OrderService.getAllOrders();
    return res.status(200).json({
      status: 'success',
      data: allOrders,
    });
  },
};

export default OrderController;
