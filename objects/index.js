function capitaliseKeys(obj) {
  const newObj = {};
  for (let key in obj) {
    newObj[key.toUpperCase()] = obj[key];
  }
  return newObj;
}

function stringToObject(str) {
  return objSplitTwice(str, ",", ":", 0, 1);
}

function shoppingList(str) {
  return objSplitTwice(str, ", ", " ", 1, 0);
}

function objSplitTwice(str, firstSplit, secondSplit, key, value) {
  const newObj = {};
  if (str === "") return newObj;

  const firstSplitArr = str.split(firstSplit);
  firstSplitArr.forEach((item) => {
    const secondSplitArr = item.split(secondSplit);
    const newKey = secondSplitArr[key];
    const newValue = secondSplitArr[value];
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
