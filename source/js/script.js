let headerNav = document.querySelector(".header__nav");
let headerNavToggle = document.querySelector(".header__nav-toggle");

headerNav.classList.remove("header__nav--nojs");

headerNavToggle.addEventListener("click", function () {
  if (headerNav.classList.contains("header__nav--open")) {
    headerNav.classList.remove("header__nav--open");
  }
  else {
    headerNav.classList.add("header__nav--open");
  }
});
