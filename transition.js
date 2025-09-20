// transition.js

function fadeIn() {
  document.body.classList.add("loaded");
}

// Run on normal page load
window.addEventListener("DOMContentLoaded", fadeIn);

// Run when navigating with back/forward buttons
window.addEventListener("pageshow", (event) => {
  if (event.persisted) fadeIn();
});

// Handle fade-out on link clicks
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("a").forEach(link => {
    const href = link.getAttribute("href");
    if (!href || href.startsWith("#") || link.target === "_blank") return;

    link.addEventListener("click", e => {
      e.preventDefault();
      document.body.classList.remove("loaded"); // fade-out
      setTimeout(() => {
        window.location.href = href;
      }, 600); // match CSS transition duration
    });
  });
});

// Handle browser back/forward button fade-out
window.addEventListener("beforeunload", () => {
  document.body.classList.remove("loaded"); // fade-out before leaving
});
