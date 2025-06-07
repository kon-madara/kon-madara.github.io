const pages = document.querySelectorAll('.page');
let currentPage = 0;

function showPage(index) {
  pages.forEach(p => p.classList.remove('active'));
  pages[index].classList.add('active');
}

document.getElementById('nextBtn').addEventListener('click', () => {
  if (currentPage < pages.length - 1) {
    currentPage++;
    showPage(currentPage);
  }
});

document.getElementById('prevBtn').addEventListener('click', () => {
  if (currentPage > 0) {
    currentPage--;
    showPage(currentPage);
  }
});
