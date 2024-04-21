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
document.addEventListener("DOMContentLoaded", function () {
  let carousel = document.getElementById("projectsCarousel");
  let slides = carousel.getElementsByClassName("carousel-item");
  let totalSlides = slides.length;
  let currentIndex = 0;

  function showSlide(index) {
    for (let i = 0; i < slides.length; i++) {
      slides[i].classList.remove("active");
    }
    slides[index].classList.add("active");
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

// let slideIndex = 0;
// showSlide(slideIndex);

// function previousSlide() {
//   showSlide((slideIndex -= 1));
// }

// function nextSlide() {
//   showSlide((slideIndex += 1));
// }

// function showSlide(index) {
//   const slides = document.querySelectorAll(".carousel-item img");

//   if (index < 0) {
//     slideIndex = slides.length - 1;
//   } else if (index >= slides.length) {
//     slideIndex = 0;
//   }

//   for (let i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }

//   slides[slideIndex].style.display = "block";
// }
