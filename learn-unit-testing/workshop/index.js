// "pikachu" -> "https://pokeapi.co/api/v2/pikachu"

function makeUrl(name) {
  return "https://pokeapi.co/api/v2/" + name;
}

function searchParamsToObject(string) {
  const objString = `{"${string
    .replaceAll("=", '":"')
    .replaceAll("&", '","')}"}`;

  return JSON.parse(objString);
}

function isLeapYear(year) {
  const convertedYear = Math.abs(Number(year));
  const isCenturyYear = /00$/.test(convertedYear);
  if (convertedYear % 4 !== 0) return false;
  if (isCenturyYear && convertedYear % 400 !== 0)
    return false;

  return true;
}
