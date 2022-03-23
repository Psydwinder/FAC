import { showNav } from "./Nav.js";

let previousScrollTop = 0;

function revealElementsOnScroll() {
  const sectionNodeList = document.querySelectorAll("section");
  sectionNodeList.forEach((section) => {
    const topOfElement = section.getBoundingClientRect().top;
    const pixelsOfElementShown = 50;
    topOfElement < window.innerHeight - pixelsOfElementShown
      ? section.classList.add("reveal")
      : section.classList.remove("reveal");
  });
}

function revealNavOnScrollUp() {
  const documentScrollTop = document.documentElement.scrollTop;
  if (documentScrollTop === 0) return showNav("start");
  documentScrollTop < previousScrollTop ? showNav(true) : showNav(false);
  previousScrollTop = documentScrollTop;
}

export { revealElementsOnScroll, revealNavOnScrollUp };
