const Fighter = (function() {
  let privateProps = new WeakMap();

  return class {
    constructor({ name, damage, hp, agility }) {
      privateProps.set(this, {
        name,
        damage,
        hp,
        agility,
        wins: 0,
        loses: 0,
        toTotalHp: hp
      });
    }

    getName() {
      return privateProps.get(this).name;
    }
    getDamage() {
      return privateProps.get(this).damage;
    }
    getHealth() {
      return privateProps.get(this).hp;
    }
    getAgility() {
      return privateProps.get(this).agility;
    }

    logCombatHistory() {
      return console.log(
        `Name: ${this.getName()}, Wins: ${
          privateProps.get(this).wins
        }, Losses: ${privateProps.get(this).loses}`
      );
    }
    addWin() {
      privateProps.get(this).wins += 1;
    }
    addLoss() {
      privateProps.get(this).loses += 1;
    }
    heal(heal) {
      privateProps.get(this).hp = Math.min(this.getHealth() + heal, privateProps.get(this).toTotalHp);
    }
    dealDamage(damage) {
      privateProps.get(this).hp = Math.max(0, this.getHealth() - damage);
    }
    attack(defender) {
      let maxAttackPercent = 100;
      let successOfAttack = maxAttackPercent - defender.getAgility();
      let random = Math.floor(Math.random() * maxAttackPercent);

      if (random <= successOfAttack) {
        defender.dealDamage(this.getDamage());
        console.log(
          `${this.getName()} make ${this.getDamage()} damage to ${defender.getName()}`
        );
      } else {
        console.log(`${this.getName()} attack missed`);
      }
    }
  };
})();

const firstFighter = new Fighter({
  name: 'John',
  damage: 20,
  hp: 100,
  agility: 25
});
const secondFighter = new Fighter({
  name: 'Jack',
  damage: 30,
  hp: 100,
  agility: 20
});

function battle(fighter1, fighter2) {
  if (fighter1.getHealth() === 0 || fighter2.getHealth() === 0) {
    return console.warn('The battle cannot be fought. One of the figter is dead!');
  }
  while (fighter1.getHealth() > 0 && fighter2.getHealth() > 0) {
    fighter1.attack(fighter2);

    if (fighter1.getHealth() > 0 && fighter2.getHealth() > 0) {
      fighter2.attack(fighter1);
    }
  }

  if (fighter1.getHealth() === 0) {
    fighter1.addLoss();
    console.log(`${fighter1.getName()} is dead and can't fight!`);
  } else {
    fighter1.addWin();
  }

  if (fighter2.getHealth() === 0) {
    fighter2.addLoss();
    console.log(`${fighter2.getName()} is dead and can't fight!`);
  } else {
    fighter2.addWin();
  }
}
battle(firstFighter, secondFighter);
