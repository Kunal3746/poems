// transition.js
function fadeIn() {
  document.body.classList.add("loaded");
}

window.addEventListener("DOMContentLoaded", fadeIn);

// Handle back/forward navigation (bfcache)
window.addEventListener("pageshow", (event) => {
  if (event.persisted) {
    // Page was loaded from cache (back/forward button)
    fadeIn();
  }
});

// Fade-out on link click
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("a").forEach(link => {
    const href = link.getAttribute("href");
    if (!href || href.startsWith("#") || link.target === "_blank") return;

    link.addEventListener("click", e => {
      e.preventDefault();
      document.body.classList.remove("loaded"); // fade-out
      setTimeout(() => {
        window.location.href = href;
      }, 600);
    });
  });
});
