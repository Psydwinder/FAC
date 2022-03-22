window.addEventListener("scroll", revealElementsOnScroll);

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

export { revealElementsOnScroll };
