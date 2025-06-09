let currentPage = 0;
const pages = document.querySelectorAll(".recipe-page");

function updatePages() {
  pages.forEach((el, i) => {
    el.classList.toggle("active", i === currentPage);
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

document.getElementById("nextBtn").addEventListener("click", () => {
  if (currentPage < pages.length - 1) {
    currentPage++;
    updatePages();
  }
});

document.getElementById("prevBtn").addEventListener("click", () => {
  if (currentPage > 0) {
    currentPage--;
    updatePages();
  }
});

document.addEventListener("DOMContentLoaded", () => {
  updatePages();
});