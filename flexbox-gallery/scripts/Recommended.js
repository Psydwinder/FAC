const recommendedList = document.querySelector(".recommended__list");
const recommendedItems = [
  {
    name: "Bottled Water",
    imgSrc: "images/bottled-water.jpg",
    price: "19,99",
  },
  {
    name: "Canned Water",
    imgSrc: "images/canned-water.jpg",
    price: "9,99",
  },
  {
    name: "Free Water",
    imgSrc: "images/free-water.jpg",
    price: "0",
  },
];

recommendedItems.forEach(({ name, imgSrc, price }) => {
  const newDiv = document.createElement("div");
  newDiv.classList.add("recommended__item");
  newDiv.innerHTML = `
    <img class='recommended__img' src=${imgSrc} alt=${name}/>
    <h1 class='recommended__name'>${name}</h1>
    <p class='recommended__price'>$${price}</p>
  `;
  recommendedList.append(newDiv);
});
