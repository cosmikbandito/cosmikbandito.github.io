"use strict";

const IMG_INITIALE = "images/YouAndMe.png";
const IMG_ALTERNATIVE = "images/ThisIsUs.png";

const monImage = document.querySelector("img");

if (monImage) {
  monImage.style.cursor = "pointer";

  monImage.addEventListener("click", () => {
    const estImageInitiale = monImage.getAttribute("src") === IMG_INITIALE;
    monImage.setAttribute("src", estImageInitiale ? IMG_ALTERNATIVE : IMG_INITIALE);
  });

  monImage.addEventListener("error", () => {
    console.warn("L'image n'a pas pu être chargée :", monImage.getAttribute("src"));
  });
}