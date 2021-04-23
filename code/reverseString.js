export default function reverseString(string) {
  if (!string) return null;
  return string
    .split("")
    .map((x, i, array) => {
      if (!/[a-zA-Z]/.test(x)) {
        return x;
      } else {
        return array[array.length - i - 1];
      }
    })
    .join("");
}
