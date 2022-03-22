const projects = [
  {
    name: "Tribute Page",
    liveDemo: "https://dogwishx.github.io/FAC/tribute-page/index.html",
    sourceCode: "https://github.com/DogwishX/FAC/tree/main/tribute-page",
    subSection: "FAC",
    img: "./media/hokusai.png",
    description: `Made in honor of Hokusai, a prominent japanese artist of the Edo period. A sticky point with this project was creating a nav menu, without the use of Javascript`,
    tags: ["HTML", "CSS"],
  },
  {
    name: "Functions",
    liveDemo: "https://dogwishx.github.io/FAC/functions/index.html",
    sourceCode: "https://github.com/DogwishX/FAC/tree/main/functions",
    subSection: "FAC",
    img: "./media/functions.png",
    description:
      "With this console-only project I decided to have fun by creating a mini-test environment with visual feedback whenever it passes or fails a test",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    name: "DOM Manipulation",
    liveDemo: "https://dogwishx.github.io/FAC/dom-manipulation/index.html",
    sourceCode: "https://github.com/DogwishX/FAC/tree/main/dom-manipulation",
    subSection: "FAC",
    img: "./media/codename-validator.png",
    description:
      "A simple Codename Validator with visual feedback whenever the requirements for the codename are met.",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    name: "Array Methods",
    liveDemo: "https://dogwishx.github.io/FAC/array-methods/index.html",
    sourceCode: "https://github.com/DogwishX/FAC/tree/main/array-methods",
    subSection: "FAC",
    img: "./media/array-methods.png",
    description: `This project makes use of basic DOM manipulation - triggered by click and hover events - to run array methods.`,
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    name: "Flexbox Gallery",
    liveDemo: "https://dogwishx.github.io/FAC/flexbox-gallery/index.html",
    sourceCode: "https://github.com/DogwishX/FAC/tree/main/flexbox-gallery",
    subSection: "FAC",
    img: "./media/flexbox-gallery.png",
    description: `A minimal product page for a fictional shop, created specifically to demonstrate the use of <span class='code'>display: flex</span> and <span class='code'>flex-wrap</span>. All images were taken from <a href='https://unsplash.com/'>Unsplash</a>.`,
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    name: "Application Website",
    liveDemo: "https://dogwishx.github.io/FAC/application-website/index.html",
    sourceCode: "https://github.com/DogwishX/FAC/tree/main/application-website",
    subSection: "FAC",
    img: "./media/application-website.png",
    description: `Despite it's simplicity and lack of features, this was the most challenging to build. The canvas generating spheres varying in speed, size and direction proved to be harder than initially thought.`,
    tags: ["HTML", "CSS", "JavaScript"],
  },
];

function displayProjects() {
  projects.forEach((project) => createProject(project));
  handleProjectPreviews();
}

function createProject(props) {
  const projectSubSection = document.querySelector(`.${props.subSection}`);
  const newProjectDiv = document.createElement("div");
  newProjectDiv.classList.add("project");
  newProjectDiv.innerHTML = generateInnerHTML(props);
  projectSubSection.append(newProjectDiv);
}

function generateInnerHTML(props) {
  const { name, liveDemo, sourceCode, description, img, tags } = props;
  return `
        <button class='project__preview' data-preview=${img}>Preview</button>
        <a   class='project__name' target='_blank' href=${liveDemo}>${name}</a>
        <p   class='project__description'>${description}</p>
        <img class='project__image' src=${img} />
        <ul  class='project__list'>
        ${tags.map((tag) => `<li class='project__item'>${tag}</li>`).join("")}
        </ul>
        <div class='project__links'>
          <a class='project__source' target='_blank'  href=${sourceCode}><img src='./media/github.png' alt='github icon'/></a>
          <a class='project__demo'   target='_blank'  href=${liveDemo}><img src='./media/new-window.png' alt='new window icon'/></a>
        </div>
  `;
}
function handleProjectPreviews() {
  const previewButtons = document.querySelectorAll(".project__preview");
  previewButtons.forEach((button) => {
    button.addEventListener("mousemove", handlePreview);
    button.addEventListener("mouseout", deletePreview);
  });
}

function handlePreview({ currentTarget, pageY, pageX }) {
  deletePreview();
  createPreview(currentTarget);
  positionPreview(currentTarget, pageY, pageX);
}

function createPreview(currentTarget) {
  const newPreviewImg = document.createElement("img");
  newPreviewImg.id = "preview-img";
  newPreviewImg.src = currentTarget.dataset.preview;
  document.querySelector("body").append(newPreviewImg);
}

function positionPreview(currentTarget, pageY, pageX) {
  const newPreviewImg = document.querySelector("#preview-img");
  newPreviewImg.style = `
    top: ${pageY + 15}px;
    left: ${pageX - newPreviewImg.width + currentTarget.clientWidth}px;
  `;
}

function deletePreview() {
  const previewImg = document.querySelector("#preview-img");
  if (previewImg) previewImg.remove();
}

export { displayProjects };
