const OrderService = require('../../src/services/orderService');

describe('OrderService', () => {
    beforeEach(() => {
        OrderService.orders = [];
    });

    test('should create an order', () => {
        const order = { product: 'Laptop', quantity: 1 };
        const result = OrderService.createOrder(order);

        expect(result).toHaveProperty('id', 1);
        expect(result.product).toBe(order.product);
        expect(OrderService.getOrders()).toHaveLength(1);
    });

    test('should get all orders', () => {
        OrderService.createOrder({ product: 'Phone', quantity: 2 });
        OrderService.createOrder({ product: 'Tablet', quantity: 1 });

        const orders = OrderService.getOrders();
        expect(orders).toHaveLength(2);
    });
});
