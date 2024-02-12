class Room {

    constructor(name, description, enemy) {
        this.name = name;
        this.description = description;
        this.exits = {};
        this.items = [];
        this.enemy = enemy || null;
    }

    printRoom() {
        console.clear();
        console.log("");
        console.log(this.name);
        console.log("");
        console.log(this.description);
        console.log("");
        if (this.items.length > 0) {
            console.log(`Items: ${this.items.map(item => item.name).join(", ")}`);
        }
        if (this.enemy) {
            console.log("");
            console.log(`Enemy: ${this.enemy.name} - is ${this.enemy.isDead ? 'Dead' : 'Alive'}`);
        }
        console.log(this.getExitsString());
        console.log("");
    }

    getExits() {
        return Object.keys(this.exits);
    }

    getExitsString() {
        return `Exits: ${this.getExits().join(", ")}`
    }

    connectRooms(direction, connectingRoom) {

        // Check if the direction and connecting room are valid
        if (['n', 's', 'e', 'w'].indexOf(direction) < 0 || !connectingRoom) {
            throw new Error("Error: Invalid room connection");
        }

        this.exits[direction] = connectingRoom;
    }

    getRoomInDirection(direction) {
        return this.exits[direction];
    }

    getItemByName(name) {
        // Retrieves an item from a room by item name

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
  Room,
};