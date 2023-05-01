const toggleButton = document.querySelector(".toggle-button");
const navbarLinks = document.querySelector(".navbar-links");
const card = document.getElementById("myCard");
const fadeContainers = document.querySelectorAll(".fadeContainer");

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

card.addEventListener("click", () => {
  card.classList.toggle("flipped");
});

window.addEventListener("scroll", reveal);

function reveal() {
  const windowHeight = window.innerHeight;
  const revealPoint = 150;

  fadeContainers.forEach((fadeContainer) => {
    const revealTop = fadeContainer.getBoundingClientRect().top;

    if (revealTop < windowHeight - revealPoint) {
      fadeContainer.classList.add("active");
    } else {
      fadeContainer.classList.remove("active");
    }
  });
}
