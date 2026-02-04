document.addEventListener("DOMContentLoaded", () => {
  // Footer year
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const pages = Array.from(document.querySelectorAll(".page"));
  const navLinks = Array.from(document.querySelectorAll("[data-page]"));
  const app = document.querySelector(".app");

  function showPage(id) {
  pages.forEach(p => p.classList.remove("active"));
  const target = document.getElementById(id);
  if (target) target.classList.add("active");

  // ✅ Reset every possible scroll container (fixes "still scrolled down")
  if (app) app.scrollTo({ top: 0, left: 0, behavior: "auto" });
  window.scrollTo(0, 0);
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
  if (target) target.scrollIntoView({ block: "start", behavior: "auto" });

  // Update hash
  if (location.hash !== `#${id}`) {
    history.pushState(null, "", `#${id}`);
  }
}

  function getInitialPage() {
    const hash = (location.hash || "#home").replace("#", "");
    return document.getElementById(hash) ? hash : "home";
  }

  // Click nav links
  navLinks.forEach(a => {
    a.addEventListener("click", (e) => {
      const page = a.getAttribute("data-page");
      if (!page) return;
      e.preventDefault();
      showPage(page);
    });
  });

  // Back/forward
  window.addEventListener("popstate", () => {
    showPage(getInitialPage());
  });

  // Contact form -> mailto
  const form = document.getElementById("contactForm");
  form?.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = (document.getElementById("cName")?.value || "").trim();
    const email = (document.getElementById("cEmail")?.value || "").trim();
    const msg = (document.getElementById("cMsg")?.value || "").trim();

    const subject = encodeURIComponent(`Portfolio Message — ${name || "Visitor"}`);
    const body = encodeURIComponent(
      `Hi Swathi,\n\n${msg}\n\n— ${name}\n${email}`
    );

    window.location.href = `mailto:swathicac1@gmail.com?subject=${subject}&body=${body}`;
  });

  // Initial load
  showPage(getInitialPage());
});
