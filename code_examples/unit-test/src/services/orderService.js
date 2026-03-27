class OrderService {
    constructor() {
        this.orders = [];
    }

    createOrder(order) {
        const newOrder = { id: this.orders.length + 1, ...order };
        this.orders.push(newOrder);
        return newOrder;
    }

    getOrders() {
        return this.orders;
    }
}

module.exports = new OrderService();
