export const sortStep = (
  arr: number[],
): { arrayCell: number[]; isStep: boolean } => {
  const arrayCell = [...arr];
  let isStep = false;
  for (let j = 0; j < arrayCell.length; j += 1) {
    if (arrayCell[j] > arrayCell[j + 1]) {
      [arrayCell[j], arrayCell[j + 1]] = [arrayCell[j + 1], arrayCell[j]];
      isStep = true;
      return { arrayCell, isStep };
    }
  }
  return { arrayCell, isStep };
};
