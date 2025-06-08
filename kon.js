document.addEventListener("DOMContentLoaded", () => {
  const loading = document.getElementById("loading");
  const notebookContainer = document.querySelector(".notebook-container");
  const pages = document.querySelectorAll(".page");
  const totalPages = pages.length;
  let currentPage = 1;

  // ページ番号を更新する関数
  const updatePageVisibility = () => {
    pages.forEach((page, index) => {
      page.classList.toggle("hidden", index !== currentPage - 1);
    });
  };

  // 次のページへ移動
  document.getElementById("nextBtn").addEventListener("click", () => {
    if (currentPage < totalPages) {
      currentPage++;
      updatePageVisibility();
    }
  });

  // 前のページへ移動
  document.getElementById("prevBtn").addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      updatePageVisibility();
    }
  });

  // ページ読み込み完了後の処理
  window.addEventListener("load", () => {
    loading.style.display = "none";
    notebookContainer.style.display = "flex";
    updatePageVisibility();
  });
});
