const projects = [
  {
    name: "Product Page",
    liveDemo: "https://dogwishx.github.io/FAC/flexbox-gallery/index.html",
    sourceCode: "https://github.com/DogwishX/FAC/tree/main/flexbox-gallery",
    subSection: "featured",

    img: "./media/flexbox-gallery.png",
    description: `A minimal product page for a fictional shop, created specifically to demonstrate the use of <span class='code'>display: flex</span> and <span class='code'>flex-wrap</span>. All images were taken from <a href='https://unsplash.com/'>Unsplash</a>.`,
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    name: "Tribute Page",
    liveDemo: "https://dogwishx.github.io/FAC/tribute-page/index.html",
    sourceCode: "https://github.com/DogwishX/FAC/tree/main/tribute-page",
    subSection: "featured",
    img: "./media/hokusai.png",
    description: `A tribute page made in honor of Hokusai, a prominent japanese artist of the Edo period. A sticky point with this project was creating a nav menu, without the use of Javascript`,
    tags: ["HTML", "CSS"],
  },
  {
    name: "Array Methods",
    liveDemo: "https://dogwishx.github.io/FAC/array-methods/index.html",
    sourceCode: "https://github.com/DogwishX/FAC/tree/main/array-methods",
    subSection: "honorable-mention",
    img: "./media/flexbox-gallery.png",
    description: `This page was created to meet another requirement from the FAC pre-application prompts. It makes use of basic DOM manipulation - triggered by click and hover events - to run array methods.`,
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    name: "Codename Validator",
    liveDemo: "https://dogwishx.github.io/FAC/dom-manipulation/index.html",
    sourceCode: "https://github.com/DogwishX/FAC/tree/main/dom-manipulation",
    subSection: "honorable-mention",
    img: "./media/flexbox-gallery.png",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    name: "Functions",
    liveDemo: "https://dogwishx.github.io/FAC/functions/index.html",
    sourceCode: "https://github.com/DogwishX/FAC/tree/main/functions",
    subSection: "honorable-mention",
    img: "./media/flexbox-gallery.png",
    tags: ["HTML", "CSS", "JavaScript"],
  },
];

displayProjects();

function displayProjects() {
  projects.forEach((project) => createProject(project));
  handleProjectPreviews();
}

function createProject(props) {
  const { name, liveDemo, sourceCode, subSection, description, img, tags } =
    props;
  const projectSubSection = document.querySelector(`.${subSection}`);
  const newProjectDiv = document.createElement("div");
  newProjectDiv.classList.add("project");
  newProjectDiv.innerHTML = `
        <div class='project__preview' data-preview=${img}>Preview</div>
        <h4 class='project__name'>${name}</h4>
        <p class='project__description'>${description}</p>
        <img class='project__image' src=${img} />
        <ul class='project__list'>
        ${tags.map((tag) => `<li class='project__item'>${tag}</li>`).join("")}
        </ul>
        <a  class='project__demo'  href=${liveDemo}>demoIcon</a>
        <a class='project__source' href=${sourceCode}>sourceIcon</a>
  `;
  projectSubSection.append(newProjectDiv);
}

function handleProjectPreviews() {
  const previewButtons = document.querySelectorAll(".project__preview");
  previewButtons.forEach((button) => {
    button.addEventListener("mousemove", createPreview);
    button.addEventListener("mouseout", deletePreview);
  });
}

function createPreview({ currentTarget, pageX, pageY }) {
  const previewImg = document.querySelector("#preview-img");
  if (previewImg) previewImg.remove();
  const newPreviewImg = document.createElement("img");
  newPreviewImg.id = "preview-img";
  newPreviewImg.src = currentTarget.dataset.preview;
  newPreviewImg.style = `top: ${pageY + 10}px; left: ${
    pageX - window.innerWidth / 1.5
  }px`;
  document.querySelector("body").append(newPreviewImg);
}

function deletePreview() {
  const previewImg = document.querySelector("#preview-img");
  if (previewImg) previewImg.remove();
}
