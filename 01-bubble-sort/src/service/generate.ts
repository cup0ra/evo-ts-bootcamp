export const generateArray = (max: number): number[] => {
  let array: number[] = [];
  while (array.length < max) {
    const number = Math.round(Math.random() * 99);
    if (!array.includes(number)) array = [...array, number];
  }
  return array;
};
