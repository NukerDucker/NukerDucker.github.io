const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});
const card = document.getElementById("myCard");
card.addEventListener("click", function () {
  card.classList.toggle("flipped");
});
