let currentPage = 1;
const totalPages = 2;

document.getElementById('nextBtn').addEventListener('click', () => {
  if (currentPage < totalPages) {
    document.getElementById(`page${currentPage}`).classList.remove('active');
    currentPage++;
    document.getElementById(`page${currentPage}`).classList.add('active');
  }
});

document.getElementById('prevBtn').addEventListener('click', () => {
  if (currentPage > 1) {
    document.getElementById(`page${currentPage}`).classList.remove('active');
    currentPage--;
    document.getElementById(`page${currentPage}`).classList.add('active');
  }
});
