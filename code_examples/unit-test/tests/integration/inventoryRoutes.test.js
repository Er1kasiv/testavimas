const request = require('supertest');
const app = require('../../src/app');

describe('Inventory API', () => {
    test('should add an item to inventory', async () => {
        const response = await request(app)
            .post('/inventory')
            .send({ name: 'Monitor', stock: 5 });

        expect(response.statusCode).toBe(201);
        expect(response.body.name).toBe('Monitor');
    });

    test('should get all inventory items', async () => {
        await request(app).post('/inventory').send({ name: 'Mouse', stock: 10 });

        const response = await request(app).get('/inventory');

        expect(response.statusCode).toBe(200);
        expect(response.body.length).toBeGreaterThan(0);
    });
});
