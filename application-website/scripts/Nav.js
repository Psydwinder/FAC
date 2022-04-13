const navIconDiv = document.querySelector(".nav__icon");
const navList = document.querySelector(".nav__list");
const navItemsArr = ["About Me", "Featured", "FAC"];

navIconDiv.addEventListener("click", toggleMenu);

function toggleMenu() {
  const nav = document.querySelector("nav");
  nav.classList.toggle("nav--active");
  toggleOverlay();
}

function toggleOverlay() {
  const overlayDiv = document.querySelector(".overlay");
  const header = document.querySelector("header");
  const logo = document.querySelector(".header__logo");

  if (overlayDiv) {
    overlayDiv.remove();
    header.style.backgroundColor = "#18112b";
    logo.style.visibility = "visible";
  } else {
    const body = document.querySelector("body");
    const overlayNewDiv = document.createElement("div");
    header.style.backgroundColor = "transparent";
    logo.style.visibility = "hidden";
    overlayNewDiv.classList.add("overlay");
    body.append(overlayNewDiv);
  }
}

function createNavItems() {
  navItemsArr.forEach(createItem);
}

function createItem(item) {
  const li = document.createElement("li");
  li.addEventListener("click", () => window.innerWidth < 768 && toggleMenu());
  li.classList.add("nav__item");
  li.append(createAnchor(item));
  navList.append(li);
}

function createAnchor(item) {
  const anchor = document.createElement("a");
  anchor.innerHTML = item;
  anchor.href = `#${item.toLowerCase().replace(" ", "-")}`;
  return anchor;
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

function showNav(showOrHide) {
  const header = document.querySelector("header");
  const nav = document.querySelector("nav");
  if (nav.classList[0] && nav.classList[0] === "nav--active") return;
  if (showOrHide === "start") header.classList.add("header--start");
  header.classList = "";
  header.classList.add(`header--${showOrHide ? "show" : "hide"}`);
}

export { createNavItems, deactivateNavMenu, showNav };
