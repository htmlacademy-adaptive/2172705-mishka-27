const headerNav = document.querySelector(".header__nav");
const headerNavToggle = document.querySelector(".header__nav-toggle");

headerNav.classList.remove("no-js");
headerNavToggle.addEventListener("click", () => headerNav.classList.toggle("is-open"));
