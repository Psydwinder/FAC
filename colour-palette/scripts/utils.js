function createNotification(text) {
  const body = document.querySelector("body");
  const notification = document.createElement("p");
  notification.classList.add("notification");
  notification.innerText = text;
  body.append(notification);
  setTimeout(() => notification.remove(), 5000);
}

function randomNumber(possibilities) {
  return Math.floor(Math.random() * possibilities);
}

function randomHex() {
  const HEX_POSSIBILITIES = 16777215; // 16^6
  const randomHex = parseInt(randomNumber(HEX_POSSIBILITIES))
    .toString(16)
    .toUpperCase();

  return randomHex.length < 6 ? randomHex.padStart(6, "0") : randomHex;
}

function actionAllColours(coloursArr, fn) {
  coloursArr.forEach((colour) => !colour.isLocked && colour[fn]());
}

export { createNotification, randomNumber, randomHex, actionAllColours };
