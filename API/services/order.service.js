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

  addOrder(order) {
    const orderLength = dummyData.orders.length;
    const lastId = dummyData.meals[orderLength - 1].id;
    const newId = lastId + 1;
    order.id = newId;
    dummyData.orders.push(order);
    return order;
  },
};


export default OrderService;
