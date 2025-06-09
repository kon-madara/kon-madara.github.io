// ▼詩：順番にフェードイン・フェードアウト
const poemLines = document.querySelectorAll('.poem-line');
let lineIndex = 0;
let fadeInTime = 2200;   // ms フェードイン
let visibleTime = 3200;  // ms 表示し続ける
let fadeOutTime = 2200;  // ms フェードアウト
let betweenDelay = 700;  // ms 次の詩までの隙間

function showLine(i) {
  poemLines.forEach((line, idx) => {
    line.style.opacity = (idx === i) ? "1" : "0";
  });
  setTimeout(() => {
    poemLines[i].style.opacity = "0";
    setTimeout(() => {
      showLine((i + 1) % poemLines.length);
    }, fadeOutTime + betweenDelay);
  }, visibleTime);
}
window.addEventListener('DOMContentLoaded', () => {
  showLine(0);
});

// ▼雨アニメーション
const canvas = document.querySelector('.rain');
const ctx = canvas.getContext('2d');

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener('resize', resize);

const drops = Array.from({ length: 38 }, () => ({
  x: Math.random() * window.innerWidth,
  y: Math.random() * window.innerHeight,
  len: 16 + Math.random() * 36,
  speed: 2.5 + Math.random() * 3.5,
  opacity: 0.13 + Math.random() * 0.18
}));

function rain() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (const d of drops) {
    ctx.globalAlpha = d.opacity;
    ctx.strokeStyle = "#fff";
    ctx.lineWidth = 1.1;
    ctx.beginPath();
    ctx.moveTo(d.x, d.y);
    ctx.lineTo(d.x, d.y + d.len);
    ctx.stroke();
    d.y += d.speed;
    if (d.y > canvas.height) {
      d.x = Math.random() * canvas.width;
      d.y = -d.len;
      d.len = 16 + Math.random() * 36;
      d.speed = 2.5 + Math.random() * 3.5;
      d.opacity = 0.13 + Math.random() * 0.18;
    }
  }
  ctx.globalAlpha = 1;
  requestAnimationFrame(rain);
}
rain();