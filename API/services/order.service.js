import dummyData from '../utils/dummyData';
import Order from '../models/order.model';

const OrderService = {
  getAllOrders() {
    const validOrders = dummyData.orders.map((order) => {
      const newOrder = new Order();
      newOrder.id = order.id;
      newOrder.name = order.name;
      return newOrder;
    });
    return validOrders;
  },
};


export default OrderService;
