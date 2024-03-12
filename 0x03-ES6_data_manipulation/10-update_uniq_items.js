export default function updateUniqueItems(myMap) {
  if (!(myMap instanceof Map)) {
    throw new Error('Cannot process');
  }
  myMap.forEach((value, key, map) => {
    if (value === 1) {
      myMap.set(key, 100);
    }
  });
  return myMap;
}
