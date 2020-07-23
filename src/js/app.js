class Character {
  constructor(character) {
    this.name = character.name;
    this.health = character.health;
  }
}

function firstAid(character) {
  if (character.health > 50) {
    return ('healthy');
  } else if ((character.health > 15) && (character.health <= 50)) {
    return ('wounded');
  } else if (character.health <= 15) {
    return ('critical');
  }
}
// Здоровье более 50 - зелёный;
// Здоровье от 50 и до 15 - жёлтый;
// Менее 15 - красный.

// Реализуйте функцию, которая на вход принимает объект вида:
// {name: 'Маг', health: 90}

import sum from './basic';

console.log('worked');

console.log(sum([1, 2]));
