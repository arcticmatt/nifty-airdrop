export default function groupBy<T extends { [key: string]: any }>(
  arr: Array<T>,
  fn: (val: any) => string
): { [key: string]: Array<T> } {
  return arr.reduce((acc: { [key: string]: Array<T> }, curr) => {
    const keyVal = fn(curr);
    if (!(keyVal in acc)) {
      return { ...acc, [keyVal]: [curr] };
    }
    return { ...acc, [keyVal]: [...acc[keyVal as string], curr] };
  }, {});
}
