const monImage = document.querySelector("img");

monImage.addEventListener("click", () => {
  const maSrc = monImage.getAttribute("src");
  if (maSrc === "images/YouAndMe.png") {
    monImage.setAttribute("src", "images/ThisIsUs.png");
  } else {
    monImage.setAttribute("src", "images/YouAndMe.png");
  }
});
