let productButton = document.querySelector(".product__button");
let modalContainer = document.querySelector(".modal-container");

productButton.addEventListener("click", function () {
  if (!modalContainer.classList.contains("modal-container--open")) {
    modalContainer.classList.add("modal-container--open");
  }
});
