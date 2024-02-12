const { Food } = require('./food');
const { Weapon } = require('./weapon');
const { Character } = require('./character');

class Player extends Character {
    equippedItem;

    constructor(name, startingRoom, baseDamage) {
        super(10, parseInt(baseDamage), name);
        this.name = name;
        this.currentRoom = startingRoom;
        this.items = [];
        this.baseDamage = baseDamage;
    }

    move(direction) {

        const nextRoom = this.currentRoom.getRoomInDirection(direction);

        // If the next room is valid, set the player to be in that room
        if (nextRoom) {
            this.currentRoom = nextRoom;

            nextRoom.printRoom(this);
        } else {
            console.log("You cannot move in that direction");
        }
    }

    printInventory() {
        if (this.items.length === 0) {
            console.log(`${this.name} is not carrying anything.`);
        } else {
            console.log(`${this.name} is carrying:`);
            for (let i = 0 ; i < this.items.length ; i++) {
                console.log(`  ${this.items[i].name}`);
            }
        }
    }

    takeItem(itemName) {
        // Picks up an item from the current room into the player's inventory

        // Your code here
        let itemFound = false;

        this.currentRoom.items.forEach((item, index) => {
            if (item.name == itemName) {
                this.items.push(item);
                this.currentRoom.items.splice(index, 1);
                itemFound = true;
                return true;
            }
        });

        if (!itemFound) {
            console.log(`Item ${itemName} could not be found`);
        }
    }

    dropItem(itemName) {
        // Drops an item the player is holding into their current room

        this.items.forEach((item, index) => {
            if (itemName == item.name) {
                this.currentRoom.items.push(item);
                this.items.splice(index, 1);
            }
        });
    }

    eatItem(itemName) {
        // Allow the player to eat food items, but not non-food items

        // Your code here
        this.items.forEach((item, index) => {
            if (itemName == item.name && item instanceof Food) {
                this.items.splice(index, 1);
            }
        }); 
    }

    equipItem(itemName) {
        this.items.forEach((item, index) => {
            if (itemName == item.name && item instanceof Weapon) {
                this.equippedItem = item;
                this.damage = parseInt(this.baseDamage) + parseInt(item.damage);
                this.items.splice(index, 1);
            } else {
                console.log(`Item ${itemName} is not a weapon`)
            }
        }); 
    }

    getItemByName(name) {
        // Retrieves an item from a player's inventory by item name

        // Your code here
        let matchingItem; 
        
        this.items.forEach((item) => {
            if (item.name == name) {
                matchingItem = item;
            }
        });
        
        return matchingItem;
    }
}

module.exports = {
  Player,
};