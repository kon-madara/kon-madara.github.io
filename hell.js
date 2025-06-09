let currentPage = 0;
const pages = document.querySelectorAll('.recipe-page');

function updatePage() {
  pages.forEach((p, i) => {
    p.classList.toggle('active', i === currentPage);
  });
}

document.getElementById('nextBtn').addEventListener('click', () => {
  if (currentPage < pages.length - 1) {
    currentPage++;
    updatePage();
  }
});

document.getElementById('prevBtn').addEventListener('click', () => {
  if (currentPage > 0) {
    currentPage--;
    updatePage();
  }
});

document.addEventListener('DOMContentLoaded', updatePage);