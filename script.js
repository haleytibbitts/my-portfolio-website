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

// Scroll to Top visibility
const toTopButton = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop >= 75) {
    toTopButton.style.display = "block";
  } else {
    toTopButton.style.display = "none";
  }
});

// Form Submit
const contactForm = document.querySelector("form");
const successMsg = document.querySelector("#success");
const failMsg = document.querySelector("#fail");
let formIsValid = false;

const handleSubmit = (e) => {
  e.preventDefault();

  const myForm = e.target;
  const formData = new FormData(myForm);

  failMsg.style.display = "none";
  successMsg.style.display = "none";

  if (formIsValid) {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => (successMsg.style.display = "block"))
      .catch((error) => alert(error));
  } else {
    failMsg.style.display = "block";
  }
};

contactForm.addEventListener("submit", handleSubmit);
contactForm.addEventListener("change", () => {
  const inputValidation = [];

  for (let i = 1; i <= 3; i++) {
    if (contactForm[i].value && contactForm[i].value !== " ") {
      inputValidation[i - 1] = true;
      console.log(`${[i]} looks good!`);
    } else {
      inputValidation[i - 1] = false;
      console.log(`${[i]} looks BAD!`);
    }
  }

  if (inputValidation.includes(false)) {
    formIsValid = false;
  } else {
    formIsValid = true;
  }

  console.log(formIsValid);
});
