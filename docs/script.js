// year
document.getElementById("y").textContent = new Date().getFullYear();

// Gentle orb movement (UI/UX motion vibe)
const orbs = [
  { el: document.querySelector(".orb-1"), x: 18, y: 12, t: 5200 },
  { el: document.querySelector(".orb-2"), x: -14, y: 18, t: 6400 },
  { el: document.querySelector(".orb-3"), x: 16, y: -10, t: 7000 },
];

orbs.forEach((o, i) => {
  let dir = 1;
  setInterval(() => {
    dir *= -1;
    o.el.animate(
      [
        { transform: `translate(${0}px, ${0}px)` },
        { transform: `translate(${o.x * dir}px, ${o.y * dir}px)` }
      ],
      { duration: o.t, easing: "ease-in-out", fill: "forwards" }
    );
  }, o.t);
});

// Optional: subtle cursor parallax (feels premium)
document.addEventListener("mousemove", (e) => {
  const mx = (e.clientX / window.innerWidth - 0.5);
  const my = (e.clientY / window.innerHeight - 0.5);

  document.querySelector(".orb-1").style.transform = `translate(${mx * 18}px, ${my * 12}px)`;
  document.querySelector(".orb-2").style.transform = `translate(${mx * -14}px, ${my * 18}px)`;
  document.querySelector(".orb-3").style.transform = `translate(${mx * 16}px, ${my * -10}px)`;
});
