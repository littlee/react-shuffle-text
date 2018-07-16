export function genRandomChars(char, len = 30) {
  let baseChars =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  baseChars = baseChars.split('').sort(function() {
    return Math.random() - 0.5;
  });

  while (baseChars.length < len) {
    baseChars = baseChars.concat(baseChars);
  }

  return baseChars.slice(0, len - 1).concat(char);
}