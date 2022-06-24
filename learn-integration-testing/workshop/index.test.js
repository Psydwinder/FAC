test("add", () => {
  equal(calculate(1, "+", 2), 3);
});

test("subtract", () => {
  equal(calculate(2, "-", 1), 1);
});

test("divide", () => {
  equal(calculate(2, "/", 2), 1);
});

test("multiply", () => {
  equal(calculate(2, "*", 2), 4);
});

test("strings", () => {
  equal(calculate("2", "+", "2"), 4);
});

test("check user input", () => {
  const form = document.querySelector("form");
  const result = document.querySelector("#result");
  const submit = document.querySelector("button");

  // User types first number
  form.elements.a.value = "4";

  // User selects the operator sign
  form.elements.sign.value = "*";

  // User types second number
  form.elements.b.value = "3";

  // User submits for calculation
  submit.click();

  equal(result.textContent, "12");

  // Reset for next test
  result.textContent = "";
});
