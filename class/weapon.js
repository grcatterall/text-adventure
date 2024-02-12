const { Item } = require('./item'); 

class Weapon extends Item {
    damage;

    constructor(
        name, 
        description,
        damage
    ) {
        super(name, description);
        this.damage = damage;
    }
}

module.exports = {
    Weapon,
};