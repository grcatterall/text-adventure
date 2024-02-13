const readline = require('readline');

const { Player } = require('./class/player');
const { World } = require('./class/world');

const worldData = require('./data/world-data');

let player;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function printHelp() {
    console.log("Controls:")
    console.log("  Type 'h' for help");
    console.log("  Type 'q' to quit");
    console.log("  Type 'l' to look around");
    console.log("  Type 'i' to check your inventory");
    console.log("  Type 'take <item>' to take an item");
    console.log("  Type 'equip <item>' to equip an item");
    console.log("  Type 'drop <item>' to drop an item");
    console.log("  Type 'eat <item>' to eat a food item");
    console.log("  Type 'attack' to attack enemy in room");
    console.log("  Type 'n', 's', 'e', 'w' to move");
    console.log("");
}

function startGame() {
    console.clear();
    console.log("Welcome to App Academy Adventure!\n");

    rl.question('Please enter your name: ', (name) => {
        console.clear();
        console.log(`Hello, ${name}!\n`);

        // Create the world and player
        world = new World();
        world.loadWorld(worldData);
        player = new Player(name, world.rooms[1], 2);

        // Show commands
        printHelp();

        rl.question('\nHit RETURN to start your adventure\n', () => {

            console.clear();
            player.currentRoom.printRoom();

            processCommand();
        });
    });
}


function processCommand() {

    rl.question('> ', (cmd) => {
        cmd = cmd.toLowerCase();

        if (cmd === 'h') {
            printHelp();
            return;

        } else if (cmd === 'q') {
            rl.close();
            return;

        } else if (cmd === 'l') {
            player.currentRoom.printRoom();

        } else if (cmd === 'i') {
            player.printInventory();

        } else if (['n', 's', 'e', 'w'].indexOf(cmd) >= 0) {
            let direction = cmd;
            player.move(direction);

        } else if (cmd.startsWith("take ")) {
            let itemName = cmd.substring(cmd.indexOf(' ') + 1);

            player.takeItem(itemName);
            
        } else if (cmd.startsWith("drop ")) {
            let itemName = cmd.substring(cmd.indexOf(' ') + 1);

            player.dropItem(itemName);

        } else if (cmd.startsWith("eat ")) {
            let itemName = cmd.substring(cmd.indexOf(' ') + 1);

            player.eatItem(itemName);

        } else if (cmd.startsWith("attack")) {
            if (player.currentRoom.enemy) {
                let target = player.currentRoom.enemy;
    
                player.attack(target);

                console.log('Successful hit');
                console.log(`${target.name}'s health is now ${target.health}`)

                if (!target.isDead) {
                    target.attack(player);
                    console.log(`${target.name} dealt ${target.damage} to you`);
                    console.log(`You have ${player.health} remaining`);
                } else {
                    target.dropItems();
                    player.currentRoom.printRoom();
                }
            } else {
                console.log('There are no emenies to attack in this room');
            }

        } else if (cmd.startsWith("equip ")) {
            let itemName = cmd.substring(cmd.indexOf(' ') + 1);

            player.equipItem(itemName);

            if (player.equippedItem) {
                console.log(`You equipped a ${itemName}`);
                console.log(`Your damage is now ${player.damage}`);
            }

        } else {
            console.log("Invalid command. Type 'h' for help.");
        }

        processCommand();
    });
}

startGame();