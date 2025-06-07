const pages = document.querySelectorAll(".page");
let currentPage = 0;

document.getElementById("nextButton").addEventListener("click", () => {
  if (currentPage < pages.length - 1) {
    pages[currentPage].classList.remove("active");
    currentPage++;
    pages[currentPage].classList.add("active");
  }
});

document.getElementById("prevButton").addEventListener("click", () => {
  if (currentPage > 0) {
    pages[currentPage].classList.remove("active");
    currentPage--;
    pages[currentPage].classList.add("active");
  }
});
