export default function appendToEachArrayValue(array, appendString) {
  const newArr = new Array();
  for (const idx of array) {
    newArr.push(`${appendString}${idx}`);
  }

  return newArr;
}
