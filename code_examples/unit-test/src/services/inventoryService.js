class InventoryService {
    constructor() {
        this.inventory = [];
    }

    addItem(item) {
        const newItem = { id: this.inventory.length + 1, ...item };
        this.inventory.push(newItem);
        return newItem;
    }

    getInventory() {
        return this.inventory;
    }
}

module.exports = new InventoryService();
