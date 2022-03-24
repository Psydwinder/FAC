const navIconDiv = document.querySelector(".nav__icon");
const navList = document.querySelector(".nav__list");
const navItemsArr = ["About Me", "FAC", "Other"];

navIconDiv.addEventListener("click", toggleMenu);

function toggleMenu() {
  const nav = document.querySelector("nav");
  nav.classList.toggle("nav--active");
  toggleOverlay();
}

function toggleOverlay() {
  const overlayDiv = document.querySelector(".overlay");
  const header = document.querySelector("header");
  if (overlayDiv) {
    overlayDiv.remove();
    header.style.backgroundColor = "#18112b";
  } else {
    const body = document.querySelector("body");
    const overlayNewDiv = document.createElement("div");
    header.style.backgroundColor = "transparent";
    overlayNewDiv.classList.add("overlay");
    body.append(overlayNewDiv);
  }
}

function createNavItems() {
  navItemsArr.forEach(createItem);
}

function createItem(item) {
  const li = document.createElement("li");
  const anchor = document.createElement("a");
  anchor.innerHTML = item;
  anchor.href = `#${item.toLowerCase().replace(" ", "-")}`;
  li.append(anchor);
  li.classList.add("nav__item");

  li.addEventListener("click", () => window.innerWidth < 768 && toggleMenu());

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

function showNav(showOrHide) {
  const header = document.querySelector("header");
  const nav = document.querySelector("nav");
  if (nav.classList[0] && nav.classList[0] === "nav--active") return;
  if (showOrHide === "start") header.classList.add("header--start");
  header.classList = "";
  header.classList.add(`header--${showOrHide ? "show" : "hide"}`);
}

export { createNavItems, deactivateNavMenu, showNav };
