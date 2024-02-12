const { Character } = require('./character');
const { Item } = require('./item');
const { Food } = require('./food');
const { Weapon } = require('./weapon');

class Enemy extends Character {
    constructor(
        name,
        health,
        damage,
        heldItems,
        currentRoom
    ) {
        super(health, damage, name);
        this.heldItems = heldItems;
        this.currentRoom = currentRoom;
    }

    dropItems() {
        this.heldItems.forEach((item) => {
            let storeItem;

            if (item.isFood) {
                storeItem = new Food(item.name, item.description);
            } else if (item.isWeapon) {
                storeItem = new Weapon(item.name, item.description, item.damage);
            } else {
                storeItem = new Item(item.name, item.description);
            }

            this.currentRoom.items.push(storeItem);
        });
    }
}

module.exports = {
    Enemy
};