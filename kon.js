document.addEventListener("DOMContentLoaded", function () {
  const pages = document.querySelectorAll(".page");
  let currentPage = 0;

  function showPage(index) {
    pages.forEach((page, i) => {
      page.classList.toggle("active", i === index);
    });
  }

  document.getElementById("prev").addEventListener("click", function () {
    if (currentPage > 0) {
      currentPage--;
      showPage(currentPage);
    }
  });

  document.getElementById("next").addEventListener("click", function () {
    if (currentPage < pages.length - 1) {
      currentPage++;
      showPage(currentPage);
    }
  });

  showPage(currentPage);
});
