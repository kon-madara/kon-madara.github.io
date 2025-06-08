const pages = document.querySelectorAll('.page');
let current = 0;

function showPages(index) {
  pages.forEach((page, i) => {
    page.classList.remove('turn');
    page.style.zIndex = (i === index || i === index + 1) ? 2 : 1;
    page.style.visibility = (i === index || i === index + 1) ? 'visible' : 'hidden';
  });
  if (pages[index + 1]) {
    pages[index + 1].classList.remove('turn');
  }
}

function turnPage() {
  if (current + 2 < pages.length) {
    pages[current + 1].classList.add('turn');
    setTimeout(() => {
      current += 2;
      showPages(current);
    }, 700); // アニメ時間
  }
}

function prevPage() {
  if (current > 0) {
    pages[current - 1].classList.remove('turn');
    setTimeout(() => {
      current -= 2;
      showPages(current);
    }, 700);
  }
}

document.getElementById('nextBtn').addEventListener('click', turnPage);
document.getElementById('prevBtn').addEventListener('click', prevPage);

showPages(current);
