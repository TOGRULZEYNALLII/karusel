const mainimg = document.querySelector("#mainimg");
const thumbs = document.querySelector("#container-images img");
thumbs.forEach((thumb) => {
  thumb.addEventListener("click", (event) => {
    mainimg.src = event.target.src;
  });
});
