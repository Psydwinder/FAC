class Test {
  constructor(test, expectedOutput) {
    this.function = test;
    this.output = eval(test);
    this.expectedOutput = expectedOutput;
    this.result = this.output === expectedOutput ? "Passed" : "Failed";
  }
}

const greeter = (name) => `Hello ${name}`;
const checkType = (arg) => typeof arg;
const checkLength = (arg) => arg.length;
const addTwoNumbers = (a, b) => a + b;
const addAndMultiply = (a, b, c, d) => (a + b) * (c + d);
const checkLarger = (a, b) => Math.max(a, b);
const addArrNums = (arr) => arr.reduce((sum, num) => sum + num);
const squareNum = (num) => num * num;
const isOddOrEven = (num) => (num % 2 === 0 ? "Even" : "Odd");
const sumPositive = (arr) => addArrNums(arr.filter((num) => num > 0));

const exercises = {
  "Hello User": new Test("greeter('John')", "Hello John"),
  "What Type": new Test("checkType(12)", "number"),
  "Check Length": new Test("checkLength('Around the World')", 16),
  "Add Two Numbers": new Test("addTwoNumbers(4, 6)", 10),
  "Add and Multiply": new Test("addAndMultiply(2,3,4,5)", 45),
  "Check Larger": new Test("checkLarger(44,33)", 44),
  "Sum of Elements": new Test("addArrNums([4, 5, 6, 7, 8, 9])", 39),
  "Squaring a Number": new Test("squareNum(16)", 256),
  "Odd or Even": new Test("isOddOrEven(131)", "Odd"),
  "Sum of Positive": new Test("sumPositive([1, 3, 5, 3, 2, -1])", 14),
};

function displayTestResult(testGroup, test) {
  console.groupCollapsed(
    "%c  %c" + `${test.result} - ${testGroup}`,
    "background-color: " +
      (test.result === "Failed" ? "red" : "green") +
      "; margin-right: 10px; border-radius: 50%;",
    "background-color: transparent"
  );
  console.table({
    Function: { value: test.function },
    "Expected Output": { value: test.expectedOutput },
    Output: { value: test.output },
    Result: { value: test.result },
  });
  console.groupEnd();
}

for (let item in exercises) {
  displayTestResult(item, exercises[item]);
}
