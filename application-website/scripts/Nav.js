const navIconDiv = document.querySelector(".nav__icon");
const navItems = ["About Me", "FAC", "Other"];

navIconDiv.addEventListener("click", toggleMenu);

function toggleMenu() {
  const nav = document.querySelector("nav");
  nav.classList.toggle("nav--active");
  handleOverlay();
}

function handleOverlay() {
  const overlayDiv = document.querySelector(".overlay");
  if (overlayDiv) overlayDiv.remove();
  else {
    const body = document.querySelector("body");
    const overlayNewDiv = document.createElement("div");

    overlayNewDiv.classList.add("overlay");
    body.append(overlayNewDiv);
  }
}

function createListItems() {
  const navList = document.querySelector(".nav__list");
  navItems.forEach((item) => {
    const li = document.createElement("li");
    const anchor = document.createElement("a");
    anchor.innerHTML = item;
    anchor.href = `#${item.toLowerCase()}`;
    li.append(anchor);
    li.classList.add("nav__item");
    navList.append(li);
  });
}

function deactivateNavMenu() {
  const nav = document.querySelector("nav");
  if (window.innerWidth >= 768 && nav.classList[0] === "nav--active") {
    nav.classList.remove("nav--active");
    handleOverlay();
  }
}

export { createListItems, deactivateNavMenu };
