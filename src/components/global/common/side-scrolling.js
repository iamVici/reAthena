document.addEventListener('DOMContentLoaded', (event) => {
  const scrollContainer = document.querySelector('.side-scroll');

  scrollContainer.addEventListener('wheel', (e) => {
    e.preventDefault();
    scrollContainer.scrollLeft += e.deltaY;
  });
});