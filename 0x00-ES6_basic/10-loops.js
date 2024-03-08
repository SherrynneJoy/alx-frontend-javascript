export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];
  for (let i = 0; i < array.length; i += 1) {
    newArray.push(array[i] + appendString);
  }
  return newArray;
}
