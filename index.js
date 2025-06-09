const poems = document.querySelectorAll('.poem');
let current = 0;

setInterval(() => {
  poems[current].classList.remove('active');
  current = (current + 1) % poems.length;
  poems[current].classList.add('active');
}, 6000);