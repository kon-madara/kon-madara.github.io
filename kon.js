let currentPage = 1;
const totalPages = 2;

function updatePageVisibility() {
  for (let i = 1; i <= totalPages; i++) {
    document.getElementById(`page${i}`).classList.toggle("hidden", i !== currentPage);
  }
}

// 初期表示を更新
document.addEventListener("DOMContentLoaded", updatePageVisibility);

// 「進む」ボタンの処理
document.getElementById("nextBtn").addEventListener("click", () => {
  if (currentPage < totalPages) {
    currentPage++;
    updatePageVisibility();
  }
});

// 「戻る」ボタンの処理
document.getElementById("prevBtn").addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    updatePageVisibility();
  }
});
