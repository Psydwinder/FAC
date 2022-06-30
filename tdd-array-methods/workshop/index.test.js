// testing map()

test("map() should return an array with the same number of elements", () => {
  const result = map([1], () => {});
  equal(result.length, 1);
});

test("map() should transform each element of the array using the fn argument", () => {
  const result = map([1], (x) => x + 1);
  equal(result[0], 2);
});

// testing filter()
test("filter() should return empty array if none of the items match the callback argument", () => {
  const result = filter([1, 2, 3, 4], (x) => x === 0);
  equal($(result), $([]));
});

test("filter() should return array of items that match the callback argument", () => {
  const result = filter([1, 2, 3, 4], (x) => x % 2 === 0);
  equal($(result), $([2, 4]));
});

// testing every()
test("every() should return false if an item doesn't match callback", () => {
  const result = every([0, 1, 2, 3, 4], (x) => x === 0);
  equal(result, false);
});

test("every() should return true if all items match the callback argument", () => {
  const result = every([1, 2, 3, 4], (x) => typeof x === "number");
  equal(result, true);
});

// testing some()
test("some() should return true if an item matches the callback", () => {
  const result = some([0, 1, 2, 3, 4], (x) => x === 0);
  equal(result, true);
});

test("some() should return false if all items do not match the callback argument", () => {
  const result = some([1, 2, 3, 4], (x) => typeof x === "str");
  equal(result, false);
});

// testing find()
test("find() should return the first item that matches the callback", () => {
  const result = find(
    [
      { name: "Danny", age: 5 },
      { name: "John", age: 8 },
    ],
    (x) => x.name === "John"
  );
  equal($(result), $({ name: "John", age: 8 }));
});

test("find() should return undefined if unable to find an item that matches the callback argument", () => {
  const result = find(
    [
      { name: "Danny", age: 5 },
      { name: "John", age: 8 },
    ],
    (x) => x.name === "Sammy"
  );
  equal($(result), $(undefined));
});

// testing reduce()
test("reduce(), when strings are provided", () => {
  const result = reduce(["a", "b", "c", "d"], (sum, item) => sum + item, "");
  equal(result, "abcd");
});

test("reduce(), when numbers are provided", () => {
  const result = reduce([1, 2, 3, 4], (sum, item) => sum - item, 0);
  equal(result, -10);
});

// testing flat()
test("flat(), whith depth of 1", () => {
  const result = flat([1, [2]]);
  equal($(result), $([1, 2]));
});

test("flat(), with depth of 2", () => {
  const result = flat([1, [2, [3]]], 2);
  equal($(result), $([1, 2, 3]));
});
