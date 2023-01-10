const modalContainer = document.querySelector(".modal");

const openModal = () => {
  modalContainer.classList.add("is-open");
  document.addEventListener("keydown", onDocumentKeydown);
  modalContainer.addEventListener("click", onModalClick);
}

const closeModal = () => {
  modalContainer.classList.remove("is-open");
  document.removeEventListener("keydown", onDocumentKeydown);
  modalContainer.removeEventListener("click", onModalClick);
}

document.addEventListener('click', (evt) => {
  if (evt.target.closest('.open-modal')) {
    openModal();
  }
});

const onDocumentKeydown = (evt) => {
  if(evt.key === 'Escape') {
    closeModal();
  }
};

const onModalClick = (evt) => {
  if(!evt.target.closest('.modal__content')) {
    closeModal();
  }
};
