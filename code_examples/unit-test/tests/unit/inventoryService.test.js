const InventoryService = require('../../src/services/inventoryService');

describe('InventoryService', () => {
    beforeEach(() => {
        InventoryService.inventory = [];
    });

    test('should add an item to inventory', () => {
        const item = { name: 'Monitor', stock: 5 };
        const result = InventoryService.addItem(item);

        expect(result).toHaveProperty('id', 1);
        expect(result.name).toBe(item.name);
        expect(InventoryService.getInventory()).toHaveLength(1);
    });

    test('should get inventory items', () => {
        InventoryService.addItem({ name: 'Keyboard', stock: 10 });
        InventoryService.addItem({ name: 'Mouse', stock: 15 });

        const items = InventoryService.getInventory();
        expect(items).toHaveLength(2);
    });
});
