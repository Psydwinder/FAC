const navIconDiv = document.querySelector(".nav__icon");
const navList = document.querySelector(".nav__list");
const navItems = ["About Me", "FAC", "Other"];

navIconDiv.addEventListener("click", toggleMenu);

function toggleMenu() {
  const nav = document.querySelector("nav");
  nav.classList.toggle("nav--active");
  toggleOverlay();
}

function toggleOverlay() {
  const overlayDiv = document.querySelector(".overlay");
  if (overlayDiv) overlayDiv.remove();
  else {
    const body = document.querySelector("body");
    const overlayNewDiv = document.createElement("div");
    overlayNewDiv.classList.add("overlay");
    body.append(overlayNewDiv);
  }
}

function createNavItems() {
  navItems.forEach(createItem);
}

function createItem(item) {
  const li = document.createElement("li");
  const anchor = document.createElement("a");
  anchor.innerHTML = item;
  anchor.href = `#${item.toLowerCase()}`;
  li.append(anchor);
  li.classList.add("nav__item");
  navList.append(li);
}

function deactivateNavMenu() {
  const nav = document.querySelector("nav");
  const isNavActive = nav.classList[0] === "nav--active";
  const hasWidthChanged = window.innerWidth >= 768;

  if (hasWidthChanged && isNavActive) {
    nav.classList.remove("nav--active");
    toggleOverlay();
  }
}

function showNav(boolean) {
  const header = document.querySelector("header");
  header.classList.remove(`header--${!boolean ? "show" : "hide"}`);
  header.classList.add(`header--${boolean ? "show" : "hide"}`);
}

export { createNavItems, deactivateNavMenu, showNav };
