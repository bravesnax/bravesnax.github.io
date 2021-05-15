
const humburgerMenuInput = document.querySelector(".humburger-menu input");
const nav = document.querySelector(".navigation-link");
const link = document.querySelectorAll(".navigation-link li");

humburgerMenuInput.addEventListener("click", function () {
  nav.classList.toggle("slide");
});

link.forEach(function (e) {
  e.addEventListener("click", function () {
    nav.classList.toggle("slide");
    humburgerMenuInput.checked = false;
  });
});