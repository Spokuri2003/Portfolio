// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Smooth reveal on scroll
const io = new IntersectionObserver((entries) => {
  for (const e of entries) {
    if (e.isIntersecting) e.target.classList.add("on");
  }
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => io.observe(el));

// Canvas starfield (SpaceX vibe)
const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");
let w, h, stars;

function resize() {
  const dpr = Math.min(2, window.devicePixelRatio || 1);
  w = canvas.width = Math.floor(innerWidth * dpr);
  h = canvas.height = Math.floor(innerHeight * dpr);
  canvas.style.width = innerWidth + "px";
  canvas.style.height = innerHeight + "px";
  ctx.setTransform(1,0,0,1,0,0);
  ctx.scale(dpr, dpr);

  const count = Math.floor(Math.min(220, innerWidth * 0.20));
  stars = Array.from({ length: count }, () => ({
    x: Math.random() * innerWidth,
    y: Math.random() * innerHeight,
    z: 0.2 + Math.random() * 0.8,
    r: 0.6 + Math.random() * 1.6
  }));
}
window.addEventListener("resize", resize, { passive: true });
resize();

let t = 0;
function tick() {
  t += 0.008;
  ctx.clearRect(0, 0, innerWidth, innerHeight);

  // Background wash
  const g = ctx.createLinearGradient(0, 0, innerWidth, innerHeight);
  g.addColorStop(0, "rgba(5,7,15,1)");
  g.addColorStop(1, "rgba(2,3,8,1)");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, innerWidth, innerHeight);

  // Stars
  for (const s of stars) {
    const drift = Math.sin(t * (0.8 + s.z)) * (0.25 + s.z);
    s.y += (0.22 + s.z) * 0.6;
    s.x += drift * 0.25;
    if (s.y > innerHeight + 10) s.y = -10;
    if (s.x > innerWidth + 10) s.x = -10;
    if (s.x < -10) s.x = innerWidth + 10;

    ctx.globalAlpha = 0.35 + s.z * 0.55;
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(234,240,255,1)";
    ctx.fill();
  }
  ctx.globalAlpha = 1;

  requestAnimationFrame(tick);
}
tick();
