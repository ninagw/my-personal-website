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
