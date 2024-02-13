const { Room } = require('./room');
const { Item } = require('./item');
const { Food } = require('./food');
const { Weapon } = require('./weapon');
const { Enemy } = require('./enemy');

class World {
    constructor() {
        this.rooms = {};
    }

    loadWorld(worldData) {

        const roomList = worldData.rooms;
        const itemList = worldData.items;
        const enemyList = worldData.enemies;

        // Instantiate new room objects
        // Get name, id and description from room data
        for (let i = 0 ; i < roomList.length ; i++) {

            let roomData = roomList[i];
            let newRoom = new Room(roomData.name, roomData.description);

            this.rooms[roomData.id] = newRoom;
        }

        // Connect rooms by ID
        // Note that all rooms must be created before they can be connected
        for (let i = 0 ; i < roomList.length ; i++) {

            let roomID = roomList[i].id;
            let roomConnections = roomList[i].exits;

            for (const direction in roomConnections) {
                let connectedRoomID = roomConnections[direction];
                let roomToConnect = this.rooms[connectedRoomID];
                this.rooms[roomID].connectRooms(direction, roomToConnect);
            }

        }

        // Instantiate items using data stored in the itemList variable
            // A non-food item should be instantiated as an instance of the `Item` class
            // A food item should be instantiated as an instance of the `Food` class

        // Your code here

        itemList.forEach((item) => {
            let storeItem;

            if (item.isFood) {
                storeItem = new Food(item.name, item.description);
            } else if (item.isWeapon) {
                storeItem = new Weapon(item.name, item.description, item.damage);
            } else {
                storeItem = new Item(item.name, item.description);
            }

            this.rooms[item.room].items.push(storeItem);
        });

        enemyList.forEach((enemy) => {
            const enemyChar = new Enemy(enemy.name, enemy.health, enemy.attack, enemy.drops, this.rooms[enemy.room]);
            this.rooms[enemy.room].enemy = enemyChar;
        });
    }
}

module.exports = {
  World,
};