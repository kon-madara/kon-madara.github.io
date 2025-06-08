let currentPage = 1;
const totalPages = 2;

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

prevBtn.addEventListener("click", () => {
  if (currentPage > 1) {
    document.getElementById(`page${currentPage}`).classList.add("hidden");
    currentPage--;
    document.getElementById(`page${currentPage}`).classList.remove("hidden");
  }
});

nextBtn.addEventListener("click", () => {
  if (currentPage < totalPages) {
    document.getElementById(`page${currentPage}`).classList.add("hidden");
    currentPage++;
    document.getElementById(`page${currentPage}`).classList.remove("hidden");
  }
});
