function map(array, callback) {
  const newArr = [];
  for (item of array) {
    newArr.push(callback(item));
  }
  return newArr;
}

function filter(array, callback) {
  const newArr = [];
  for (item of array) {
    callback(item) && newArr.push(item);
  }
  return newArr;
}

function every(array, callback) {
  const answerArr = [];
  for (item of array) {
    answerArr.push(callback(item));
  }
  return !answerArr.includes(false);
}

function some(array, callback) {
  const answerArr = [];
  for (item of array) {
    answerArr.push(callback(item));
  }
  return answerArr.includes(true);
}

function find(array, callback) {
  for (item of array) {
    if (callback(item)) return item;
  }
}

function reduce(array, callback, initialValue) {
  let answer = initialValue;
  for (item of array) {
    answer = callback(answer, item);
  }
  return answer;
}

function flat(array, depth = 1) {
  let flatArr = [];

  for (item of array) {
    depth > 0 && trueTypeOf(item) === "Array"
      ? (flatArr = [...flatArr, ...flat(item, depth - 1)])
      : flatArr.push(item);
  }

  return flatArr;
}
