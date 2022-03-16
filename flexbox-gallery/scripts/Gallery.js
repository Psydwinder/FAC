const galleryImgNodeList = document.querySelectorAll(".gallery__img");
const galleryBiggerImg = document.querySelector(".gallery__bigger-img");

galleryImgNodeList.forEach((img) =>
  img.addEventListener("click", changeBiggerImgSrc)
);

function changeBiggerImgSrc({ currentTarget }) {
  galleryBiggerImg.src = currentTarget.src;
}
