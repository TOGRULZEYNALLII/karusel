let butonright = document.getElementById("button-right");
let buttonleft = document.getElementById("button-left");
const imageToChange = document.getElementById("imageToChange");

butonright.addEventListener("click", function () {
  if (imageToChange.src.includes("imagesimagemain.webp")) {
    imageToChange.src = "/images/image3.webp";
  } else {
    imageToChange.src = "/images/image4.webp";
  }
});
