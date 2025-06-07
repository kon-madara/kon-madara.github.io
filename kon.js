const pages = document.querySelectorAll('.page');
const nextButton = document.querySelector('.next-button');
let currentPage = 0;

nextButton.addEventListener('click', () => {
  if (currentPage < pages.length - 1) {
    pages[currentPage].classList.remove('active');
    currentPage++;
    pages[currentPage].classList.add('active');
  }
});
