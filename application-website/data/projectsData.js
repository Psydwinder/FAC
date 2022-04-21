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
      "With this console-only project I decided to create a mini-test environment, providing visual feedback whenever it passes or fails a test",
    tags: ["JavaScript"],
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
    description: `Despite its simplicity, this was the most challenging to build. The canvas generating spheres varying in speed, size and direction proved to be harder than initially thought.`,
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    name: "Objects",
    liveDemo: "https://github.com/DogwishX/FAC/tree/main/objects/index.js",
    sourceCode: "https://github.com/DogwishX/FAC/tree/main/objects/index.js",
    subSection: "FAC",
    img: "./media/objects.png",
    description: `Prompt related to object manipulation. This file includes te following functions: capitalizeKeys(), stringToObject(), shoppingList() and mapObject()`,
    tags: ["JavaScript"],
  },
  {
    name: "Feature",
    liveDemo:
      "https://dogwishx.github.io/FAC/application-website/index.html#bored",
    sourceCode:
      "https://github.com/DogwishX/FAC/tree/main/application-website/scripts/Game.js",
    subSection: "FAC",
    img: "./media/feature.png",
    description:
      "The decision was to create a canvas game, where the user would input commands and the character would action accordingly. This project also includes a ranking, which is integrated with the Firestore Database",
    tags: ["HTML", "JavaScript", "Firestore"],
  },
];

export default projects;
