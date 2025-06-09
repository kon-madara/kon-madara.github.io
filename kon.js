document.querySelector('.next').addEventListener('click', () => {
  document.querySelector('.front').classList.add('flipped');
});

document.querySelector('.prev').addEventListener('click', () => {
  document.querySelector('.front').classList.remove('flipped');
});