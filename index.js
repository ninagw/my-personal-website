// Progress Bar ——————————————————————————

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

// Carousel ——————————————————————————
document.addEventListener("DOMContentLoaded", () => {
  let carousel = document.getElementById("projectsCarousel");
  let slides = carousel.getElementsByClassName("carousel-item");
  let indicators = carousel.getElementsByClassName("carousel-indicator");
  let totalSlides = slides.length;
  let currentIndex = 0;

  function showSlide(index) {
    for (let i = 0; i < slides.length; i++) {
      slides[i].classList.remove("active");
      indicators[i].classList.remove("active");
    }
    slides[index].classList.add("active");
    indicators[index].classList.add("active");
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
  }

  function previousSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentIndex);
  }

  // Show first slide
  showSlide(currentIndex);

  // Previous slide
  document
    .querySelector(".carousel-control-previous")
    .addEventListener("click", function () {
      previousSlide();
    });

  // Next slide
  document
    .querySelector(".carousel-control-next")
    .addEventListener("click", function () {
      nextSlide();
    });
});
