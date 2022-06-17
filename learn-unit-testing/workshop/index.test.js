test("url matches pikachu", () => {
  equal(
    makeUrl("pikachu"),
    "https://pokeapi.co/api/v2/pikachu"
  );
});

test("returns object", () => {
  const resultObj = searchParamsToObject(
    "name=oliver&email=hello@oliverjam.es"
  );
  equal(typeof resultObj, "object");
});

test("convert search parameters to object", () => {
  const resultObj = searchParamsToObject(
    "name=oliver&email=hello@oliverjam.es"
  );

  equal(
    JSON.stringify(resultObj),
    JSON.stringify({
      name: "oliver",
      email: "hello@oliverjam.es",
    })
  );
});

// isLeapYear
test("Century but not leap year, 300", () =>
  equal(isLeapYear(300), false));

test("Century but not leap year, 700", () =>
  equal(isLeapYear(700), false));

test("Century but not leap year, 1900", () =>
  equal(isLeapYear(1900), false));

test("Century leap year, 2000", () =>
  equal(isLeapYear(2000), true));

test("Normal leap year, 2020", () =>
  equal(isLeapYear(2000), true));

test("Normal not leap year, 2001", () =>
  equal(isLeapYear(2001), false));

test("Negative century leap year, -2000", () =>
  equal(isLeapYear(-2000), true));

test("Negative century not leap year, -1900", () =>
  equal(isLeapYear(-1900), false));

test("Negative normal leap year, -4", () =>
  equal(isLeapYear(-4), true));

test("String instead of number", () => {
  equal(isLeapYear("4"), true);
});

test("String with negative", () => {
  equal(isLeapYear("-4"), true);
});
