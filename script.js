const readMoreBtn = document.querySelector("button");
const modal = document.getElementById("readMoreModal");
const closeBtn = document.querySelector(".close");

readMoreBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
