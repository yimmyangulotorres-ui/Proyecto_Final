// Animación al hacer scroll (fade + slide)
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.1
});

// Esperar a que carguen las cards
window.addEventListener("load", () => {
  document.querySelectorAll(".card").forEach(card => {
    observer.observe(card);
  });
});