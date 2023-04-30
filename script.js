const track = document.getElementById("image-track");

const handleOnDown = (e) => (track.dataset.mouseDownAt = e.clientX);

const handleOnUp = () => {
  track.dataset.mouseDownAt = "0";
  track.dataset.prevPercentage = track.dataset.percentage;
};

const handleOnMove = (e) => {
  if (track.dataset.mouseDownAt === "0") return;

  const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
    maxDelta = window.innerWidth / 2;

  const percentage = (mouseDelta / maxDelta) * -100,
    nextPercentageUnconstrained =
      parseFloat(track.dataset.prevPercentage) + percentage,
    nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

  track.dataset.percentage = nextPercentage;

  track.animate(
    {
      transform: `translate(${nextPercentage}%, -50%)`,
    },
    {
      duration: 1200,
      fill: "forwards",
    }
  );

  for (const image of track.getElementsByClassName("image")) {
    image.animate(
      {
        objectPosition: `${100 + nextPercentage}% center`,
      },
      {
        duration: 1200,
        fill: "forwards",
      }
    );
  }
};

/* -- Had to add extra lines for touch events -- */

window.onmousedown = (e) => handleOnDown(e);

window.ontouchstart = (e) => handleOnDown(e.touches[0]);

window.onmouseup = (e) => handleOnUp(e);

window.ontouchend = (e) => handleOnUp(e.touches[0]);

window.onmousemove = (e) => handleOnMove(e);

window.ontouchmove = (e) => handleOnMove(e.touches[0]);
// JavaScript
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".topnav a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });
  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.classList.contains(current)) {
      link.classList.add("active");
    }
  });
});

const subtitle = document.getElementsByClassName("card-subtitle")[0];

const createWord = (text, index) => {
  const word = document.createElement("span");

  word.innerHTML = `${text} `;

  word.classList.add("card-subtitle-word");

  word.style.transitionDelay = `${index * 40}ms`;

  return word;
};

const addWord = (text, index) => subtitle.appendChild(createWord(text, index));

const createSubtitle = (text) => text.split(" ").map(addWord);

createSubtitle(
  "     Bangkok Christian College (BCC) is a private boys' school in the financial district of Si Lom, Bangkok. The school has a longstanding reputation as one of the most prestigious and highly selective schools in Thailand.Bangkok Christian College was established on 30 September 1852 by American Presbyterian missionaries. Bangkok Christian College is the oldest school in Thailand. Originally in Thonburi, the school moved to its present site in Bang Rak District in 1902.The school has about 400 academic staff, both Thai and foreigner, and 6,000 students in 12 grades. Although it is a Christian school, only about five percent of students are Christians. Most students are Buddhist, but it is popular with students of all faiths due to its strong reputation."
);
const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});
