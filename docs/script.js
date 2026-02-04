document.addEventListener("DOMContentLoaded", () => {
  // Footer year
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ===== OPTIONAL: your stars animation can go here =====
  // If you already have a stars canvas script, paste it here.
  // (Keeping it here ensures the canvas exists before code runs.)

  // Pages router
  const pages = Array.from(document.querySelectorAll(".page"));
  const navLinks = Array.from(document.querySelectorAll("[data-page]"));

  function showPage(id) {
    pages.forEach(p => p.classList.remove("active"));
    const target = document.getElementById(id);
    if (target) target.classList.add("active");

    // Keep URL hash for sharing
    if (location.hash !== `#${id}`) {
      history.pushState(null, "", `#${id}`);
    }

    // Accessibility focus (safe)
    if (target) {
      target.setAttribute("tabindex", "-1");
      try { target.focus({ preventScroll: true }); } catch (e) {}
    }
  }

  function getInitialPage() {
    const hash = (location.hash || "#home").replace("#", "");
    return document.getElementById(hash) ? hash : "home";
  }

  // Click nav without scrolling
  navLinks.forEach(a => {
    a.addEventListener("click", (e) => {
      const page = a.getAttribute("data-page");
      if (!page) return;
      e.preventDefault();
      showPage(page);
    });
  });

  // Back/forward support
  window.addEventListener("popstate", () => {
    showPage(getInitialPage());
  });

  // Initial load
  showPage(getInitialPage());
});
