// transition.js
window.addEventListener("DOMContentLoaded", () => {
  // Fade-in
  document.body.classList.add("loaded");

  // Fade-out on link click
  document.querySelectorAll("a").forEach(link => {
    const href = link.getAttribute("href");
    if (!href || href.startsWith("#") || link.target === "_blank") return;

    link.addEventListener("click", e => {
      e.preventDefault(); // stop immediate navigation
      document.body.classList.remove("loaded"); // fade-out
      setTimeout(() => {
        window.location.href = href; // navigate after fade
      }, 600); // match CSS transition duration
    });
  });
});
