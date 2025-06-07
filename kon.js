let currentPage = 1;
const totalPages = 2;

document.getElementById("nextBtn").addEventListener("click", () => {
  if (currentPage < totalPages) {
    document.getElementById(`page${currentPage}`).classList.add("hidden");
    currentPage++;
    document.getElementById(`page${currentPage}`).classList.remove("hidden");
  }
});

document.getElementById("prevBtn").addEventListener("click", () => {
  if (currentPage > 1) {
    document.getElementById(`page${currentPage}`).classList.add("hidden");
    currentPage--;
    document.getElementById(`page${currentPage}`).classList.remove("hidden");
  }
});
