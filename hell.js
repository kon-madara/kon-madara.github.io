let currentPage = 1;
const totalPages = document.querySelectorAll('.recipe-page').length;

function updatePageVisibility() {
  document.querySelectorAll('.recipe-page').forEach((el, idx) => {
    el.classList.toggle('active', idx === currentPage - 1);
  });
}

// 初期表示
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
