/**
 * Gets a random integer from 0 to the max (NOT INCLUSIVE).
 *
 * @param max
 */
const random = (max: number) => {
  return Math.floor(Math.random() * max);
};

const chooseRandom = <T>(list: T[]): T => list[random(list.length)];

export { chooseRandom, random };
