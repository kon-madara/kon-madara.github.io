const pages = document.querySelectorAll('.page');
let current = 0;

function showPage(index) {
  pages.forEach((page, i) => {
    page.classList.remove('active');
    if (i === index) {
      page.classList.add('active');
    }
  });
}

document.querySelectorAll('.next').forEach(btn => {
  btn.addEventListener('click', () => {
    if (current < pages.length - 1) {
      current++;
      showPage(current);
    }
  });
});

document.querySelectorAll('.prev').forEach(btn => {
  btn.addEventListener('click', () => {
    if (current > 0) {
      current--;
      showPage(current);
    }
  });
});

// 初期表示
showPage(current);