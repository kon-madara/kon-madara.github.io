const pages = document.querySelectorAll(".page");
let currentPage = 0;

document.getElementById("nextBtn").addEventListener("click", () => {
  pages[currentPage].classList.remove("active");
  currentPage = (currentPage + 1) % pages.length;
  pages[currentPage].classList.add("active");
});

document.getElementById("prevBtn").addEventListener("click", () => {
  pages[currentPage].classList.remove("active");
  currentPage = (currentPage - 1 + pages.length) % pages.length;
  pages[currentPage].classList.add("active");
});
