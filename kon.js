let currentPage = 1;
const pages = document.querySelectorAll('.page');
const totalPages = pages.length;

function updatePageVisibility() {
  pages.forEach((page, idx) => {
    page.classList.toggle('hidden', idx + 1 !== currentPage);
  });
}

document.addEventListener("DOMContentLoaded", updatePageVisibility);

document.getElementById("nextBtn").addEventListener("click", () => {
  if (currentPage < totalPages) {
    currentPage++;
    updatePageVisibility();
  }
});

document.getElementById("prevBtn").addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    updatePageVisibility();
  }
});
