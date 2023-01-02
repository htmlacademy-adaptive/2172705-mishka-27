let headerNav = document.querySelector(".header__nav");
let headerNavToggle = document.querySelector(".header__nav-toggle");

headerNav.classList.remove("header__nav--no-js");
headerNavToggle.addEventListener("click", () => headerNav.classList.toggle("header__nav--open"));
