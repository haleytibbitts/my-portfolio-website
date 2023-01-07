// grab body and store in variable
// Add event listener on toggle to change class name on body variable
//grab sky image
// change sky image when event listener activated

// Namespace object for WIP landing page
const comingSoon = {};

comingSoon.body = document.getElementById("theme");

comingSoon.sky = document.getElementById("sky");

comingSoon.toggle = document.getElementById("chk");

comingSoon.isDark = false;

comingSoon.toggle.addEventListener("change", () => {
  comingSoon.body.classList.toggle("dark-mode");
  comingSoon.chgImg();
  comingSoon.isDark = !comingSoon.isDark;
});

comingSoon.chgImg = () => {
  if (comingSoon.isDark === false) {
    comingSoon.sky.src = "./assets/night-sky.jpg";
  } else {
    comingSoon.sky.src = "./assets/day-sky.jpg";
  }
};
