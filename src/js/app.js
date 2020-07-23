export const magician = { name: 'маг', health: 90 };
export const healthy = 'healthy';
export const wounded = 'wounded';
export const critical = 'critical';

export default function firstAid(e) {
  if (e.health > 50) {
    console.log('healthy');
    return healthy;
  } else if ((e.health > 15) && (e.health <= 50)) {
    console.log('wounded');
    return wounded;
  } else if (e.health <= 15) {
    console.log('critical');
    return critical;
  }
};

firstAid(magician);

import sum from './basic';

console.log('worked');

console.log(sum([1, 2]));
