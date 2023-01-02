let modalContainer = document.querySelector(".modal-container");
let catalogButtons = document.querySelectorAll(".catalog__button");

for (let i = 0; i < catalogButtons.length; i++) {
  catalogButtons[i].addEventListener("click", function () {
    if (!modalContainer.classList.contains("modal-container--open")) {
      modalContainer.classList.add("modal-container--open");
    }
  });
}

