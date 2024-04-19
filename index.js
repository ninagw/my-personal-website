// Implement Progress Bar ---------------------------------------------

const progressBar = document.querySelector('[data-js="progress-bar"]');

function calculateScrollPercentage() {
  const scrollY = window.scrollY;
  const windowHeight = window.innerHeight;
  const webpageHeight = document.body.clientHeight;
  const viewPortFromBottom = scrollY + windowHeight;
  const scrollPercentage = (viewPortFromBottom / webpageHeight) * 100;
  return `${scrollPercentage}%`;
}

progressBar.style.width = calculateScrollPercentage();

document.addEventListener("scroll", () => {
  progressBar.style.width = calculateScrollPercentage();
});

// slider functions ——————————————————————————
let slideIndex = 0;
showSlide(slideIndex);

function prevSlide() {
  showSlide((slideIndex -= 1));
}

function nextSlide() {
  showSlide((slideIndex += 1));
}

function showSlide(index) {
  const slides = document.querySelectorAll(".project-slides img");

  if (index < 0) {
    slideIndex = slides.length - 1;
  } else if (index >= slides.length) {
    slideIndex = 0;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex].style.display = "block";
}
