// App Object
const myPortfolio = {};

// Hamburger Menu Functionality
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", () => {
  if (navMenu.classList.value === "active") {
    navMenu.classList.replace("active", "inactive");
  } else if (navMenu.classList.value === "inactive") {
    navMenu.classList.replace("inactive", "active");
  } else {
    navMenu.classList.add("active");
  }
});

// Day & Night Mode Functionality
myPortfolio.isDay = true;

const modeInput = document.querySelector("#mode-toggle");
const ball = document.querySelector(".ball");
const theme = document.querySelector("#theme");

console.log(ball);

modeInput.addEventListener("change", () => {
  if (myPortfolio.isDay === true) {
    myPortfolio.isDay = false;
    theme.classList.replace("light-mode", "dark-mode");
    theme.classList.remove("fade-in-fast");
    void theme.offsetWidth;
    theme.classList.add("fade-in-fast");
    ball.style.transform = "translateX(0px)";
  } else {
    myPortfolio.isDay = true;
    theme.classList.replace("dark-mode", "light-mode");
    theme.classList.remove("fade-in-fast");
    void theme.offsetWidth;
    theme.classList.add("fade-in-fast");
    ball.style.transform = "translateX(32px)";
  }
});
