document.addEventListener("DOMContentLoaded", () => {
  // Footer year
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ===== OPTIONAL: Stars animation can go here =====
  // Paste your canvas stars code here if you have it.

  // Pages router
  const pages = Array.from(document.querySelectorAll(".page"));
  const navLinks = Array.from(document.querySelectorAll("[data-page]"));

  function showPage(id) {
    pages.forEach(p => p.classList.remove("active"));
    const target = document.getElementById(id);
    if (target) target.classList.add("active");

    // Always start each page at top
    window.scrollTo(0, 0);

    // Keep URL hash
    if (location.hash !== `#${id}`) {
      history.pushState(null, "", `#${id}`);
    }

    // Accessibility focus
    if (target) {
      target.setAttribute("tabindex", "-1");
      try { target.focus({ preventScroll: true }); } catch (e) {}
    }
  }

  function getInitialPage() {
    const hash = (location.hash || "#home").replace("#", "");
    return document.getElementById(hash) ? hash : "home";
  }

  // Click nav without normal scrolling
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

  // Contact form -> mailto
  const form = document.getElementById("contactForm");
  form?.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = (document.getElementById("cName")?.value || "").trim();
    const email = (document.getElementById("cEmail")?.value || "").trim();
    const msg = (document.getElementById("cMsg")?.value || "").trim();

    const subject = encodeURIComponent(`Portfolio Inquiry — ${name || "Recruiter"}`);
    const body = encodeURIComponent(
      `Hi Swathi,\n\n${msg}\n\n— ${name}\n${email}`
    );

    window.location.href = `mailto:swathicac1@gmail.com?subject=${subject}&body=${body}`;
  });

  // Initial load
  showPage(getInitialPage());
});
