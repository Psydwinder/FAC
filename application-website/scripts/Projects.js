import projects from "../data/projectsData.js";

// Project Search
const searchDiv = document.querySelector(".search");
const input = document.querySelector(".search__input");

searchDiv.addEventListener("mouseenter", toggleSearchBar);
searchDiv.addEventListener("mouseleave", handleMouseLeave);
input.addEventListener("keyup", filterProjects);

function toggleSearchBar({ currentTarget }) {
  input.focus();
  if (input.value.length > 0)
    return currentTarget.classList.add("search--active");

  currentTarget.classList.toggle("search--active");
}

function handleMouseLeave(event) {
  input.blur();
  toggleSearchBar(event);
}

function filterProjects({ currentTarget }) {
  const filteredObjArr = projects.filter(({ name }) =>
    name.toLowerCase().includes(currentTarget.value.toLowerCase())
  );
  displayProjects(filteredObjArr);
}

// Project Card creation
function displayProjects(projectArr = projects) {
  clearProjects();
  projectArr.forEach((project) => createProject(project));
  handleProjectPreviews();
}

function clearProjects(subSection) {
  const projectsSubSection = document.querySelector(".FAC");
  projectsSubSection.innerHTML = "";
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
