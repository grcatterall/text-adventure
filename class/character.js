class Character {
    damage;
    name;
    isDead = false;

    constructor(
        health,
        damage,
        name
    ) {
        this.health = parseInt(health);
        this.damage = parseInt(damage);
        this.name = name;
    }

    takeDamage(damageAmount) {
        this.health -= parseInt(damageAmount);
        if (this.health <= 0) {
            this.die();
        }
    }

    attack(target) {
        target.takeDamage(this.damage);
    }

    die() {
        this.isDead = true;
    }
}


module.exports = {
    Character,
  };