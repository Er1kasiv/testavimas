const request = require('supertest');
const app = require('../../src/app');

describe('Order API', () => {
    test('should create a new order', async () => {
        const response = await request(app)
            .post('/orders')
            .send({ product: 'Laptop', quantity: 1 });

        expect(response.statusCode).toBe(201);
        expect(response.body.product).toBe('Laptop');
    });

    test('should get all orders', async () => {
        await request(app).post('/orders').send({ product: 'Phone', quantity: 2 });

        const response = await request(app).get('/orders');

        expect(response.statusCode).toBe(200);
        expect(response.body.length).toBeGreaterThan(0);
    });
});
