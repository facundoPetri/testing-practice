const caesar = (string, shift) => {
  return string
    .split("")
    .map((x) => {
      if (/[\W\d]/.test(x)) return x;
      return String.fromCharCode(toAscii(x, shift));
    })
    .join("");
};

const toAscii = (char, shift) => {
  if (char === char.toLowerCase()) {
    return (char.charCodeAt() - 97 + (shift % 26)) + 97;
  } else {
    return (char.charCodeAt() - 65 + (shift % 26)) + 65;
  }
};

export default caesar;
