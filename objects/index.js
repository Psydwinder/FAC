function capitaliseKeys(obj) {
  const newObj = {};
  for (let key in obj) {
    newObj[key.toUpperCase()] = obj[key];
  }
  return newObj;
}

function stringToObject(str) {
  return splitObject(str, ",", ":", 0, 1);
}

function shoppingList(str) {
  return splitObject(str, ", ", " ", 1, 0);
}

function splitObject(str, firstSplit, secondSplit, keyIndex, valueIndex) {
  const newObj = {};
  if (str === "") return newObj;

  const firstSplitArr = str.split(firstSplit);
  firstSplitArr.forEach((item) => {
    const secondSplitArr = item.split(secondSplit);
    const newKey = secondSplitArr[keyIndex];
    const newValue = secondSplitArr[valueIndex];
    if (newValue === "0") return;
    newObj[newKey] = newValue;
  });
  return newObj;
}

function mapObject(obj, fn) {
  const newObj = {};
  for (key in obj) {
    newObj[key] = fn(obj[key]);
  }
  return newObj;
}
