const scrollBar = document.querySelector('[data-js="scroll-bar"]');

function calculateScrollPercentage() {
  const scrollPosition = window.scrollY;
  const windowHeight = window.innerHeight;
  const webpageHeight = document.body.clientHeight;
  const viewPortFromBottom = scrollY + windowHeight;
  const scrollPercentage = (viewPortFromBottom / webpageHeight) * 100;
  return `${scrollPercentage}%`;
}

// scrollBar.style.width = calculateScrollPercentage();

scrollBar.style.height = calculateScrollPercentage();

document.addEventListener("scroll", () => {
  scrollBar.style.height = calculateScrollPercentage();
});
