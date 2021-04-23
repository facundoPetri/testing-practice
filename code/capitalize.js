export default function capitalize(string) {
  if (!string) return null;
  return string
    .trim()
    .split("")
    .map((x, i) => (i === 0 ? x.toUpperCase() : x))
    .join("");
}
