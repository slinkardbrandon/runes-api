/**
 * Returns a random number between min (inclusive) and max (exclusive)
 */
export const getNumberBetween = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
