
// Utility Functions

export function randomIntBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export function replaceAll(str, find, replace) {
  return str.split(find).join(replace);
}

// Durstenfeld shuffle algorithm
export function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
}
