let currentPage = 1;
const totalPages = document.querySelectorAll('.recipe-page').length;

// 表示更新
function updatePageVisibility() {
  document.querySelectorAll('.recipe-page').forEach((el, idx) => {
    el.classList.toggle('active', idx === currentPage - 1);
  });
}

// 初期表示
document.addEventListener("DOMContentLoaded", updatePageVisibility);

// 「進む」ボタン
document.getElementById("nextBtn").addEventListener("click", () => {
  if (currentPage < totalPages) {
    currentPage++;
    updatePageVisibility();
  }
});

// 「戻る」ボタン
document.getElementById("prevBtn").addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    updatePageVisibility();
  }
});