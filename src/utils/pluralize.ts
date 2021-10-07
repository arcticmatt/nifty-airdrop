export default function pluralize(num: number): "" | "s" {
  return num === 1 ? "" : "s";
}
