const random = (max: number) => {
  return Math.floor(Math.random() * max);
};

const chooseRandom = <T>(list: T[]): T => list[random(list.length)];

export { chooseRandom, random };
