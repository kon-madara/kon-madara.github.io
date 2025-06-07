let currentPage = 0;
const pages = document.querySelectorAll('.page');
const nextButton = document.querySelector('.next-button');
const prevButton = document.querySelector('.prev-button');

function updatePages() {
  pages.forEach((page, i) => {
    if (i === currentPage) {
      page.classList.add('active');
    } else {
      page.classList.remove('active');
    }
  });
}

nextButton.addEventListener('click', () => {
  if (currentPage < pages.length - 1) {
    currentPage++;
    updatePages();
  }
});

prevButton.addEventListener('click', () => {
  if (currentPage > 0) {
    currentPage--;
    updatePages();
  }
});

updatePages();
