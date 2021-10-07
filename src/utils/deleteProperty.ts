import produce from "immer";

// eslint-disable-next-line @typescript-eslint/ban-types
export default function deleteProperty<T extends Object, K extends keyof T>(
  obj: T,
  key: K
): Omit<T, K> {
  return produce(obj, (draft) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // eslint-disable-next-line no-param-reassign
    delete draft[key];
  });
}
