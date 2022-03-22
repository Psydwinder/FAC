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

function objSplitTwice(str, firstSplit, secondSplit, left, right) {
  const newObj = {};
  const firstSplitArr = str.split(firstSplit);
  if (str === "") return newObj;

  firstSplitArr.forEach((item) => {
    const secondSplitArr = item.split(secondSplit);
    const key = secondSplitArr[left];
    const value = secondSplitArr[right];
    if (value === "0") return;
    newObj[key] = value;
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
