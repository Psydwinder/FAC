const projects = [
  {
    name: "Product Page",
    href: "https://dogwishx.github.io/FAC/flexbox-gallery/index.html",
    sourceCode: "https://github.com/DogwishX/FAC/tree/main/flexbox-gallery",
    subSection: "featured",
    description: `A minimal product page for a fictional shop, created specifically to demonstrate the use of <span class='code'>display: flex</span> and <span class='code'>flex-wrap</span>. All images taken from <a href='https://unsplash.com/'>Unsplash</a>.`,
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    name: "Tribute Page",
    href: "https://dogwishx.github.io/FAC/tribute-page/index.html",
    sourceCode: "https://github.com/DogwishX/FAC/tree/main/tribute-page",
    subSection: "featured",
    description: `A tribute page made in honor of Hokusai, a prominent japanese artist of the Edo period. A sticky point with this project was creating a nav menu, without the use of Javascript`,
    tags: ["HTML", "CSS"],
  },
  {
    name: "Array Methods",
    href: "https://dogwishx.github.io/FAC/array-methods/index.html",
    sourceCode: "https://github.com/DogwishX/FAC/tree/main/array-methods",
    subSection: "honorable-mention",
    description: `This page was created to meet another requirement from the FAC pre-application prompts. It makes use of basic DOM manipulation - triggered by click and hover events - to run array methods.`,
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    name: "Codename Validator",
    href: "https://dogwishx.github.io/FAC/dom-manipulation/index.html",
    sourceCode: "https://github.com/DogwishX/FAC/tree/main/dom-manipulation",
    subSection: "honorable-mention",
  },
  {
    name: "Functions",
    href: "https://dogwishx.github.io/FAC/functions/index.html",
    sourceCode: "https://github.com/DogwishX/FAC/tree/main/functions",
    subSection: "honorable-mention",
  },
];

function createProject({ name, href, sourceCode, subSection }) {
  const projectSubSection = document.querySelector(`.${subSection}`);
  const newProjectDiv = document.createElement("div");
  newProjectDiv.classList.add("project");
  newProjectDiv.innerHTML = `
        <h4 class='project__name'>${name}</h4>
        <a  class='project__demo'  href=${href}>demoIcon</a>
        <a class='project__source' href=${sourceCode}>sourceIcon</a>
        <p class='project__description'></p>
  `;
  projectSubSection.append(newProjectDiv);
}

function displayProjects() {
  projects.forEach((project) => createProject(project));
}
