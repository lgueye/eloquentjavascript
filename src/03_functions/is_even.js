function isEven(input) {
  if (input === 0) return true;
  if (input === 1) return false;
  if (input < 0) return isEven(input + 2);
  return isEven(input - 2);
}
