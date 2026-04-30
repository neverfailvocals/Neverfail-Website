document.getElementById("year").textContent = new Date().getFullYear();
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add("show"); });
}, { threshold: 0.12 });
document.querySelectorAll(".section, .feature-card, .audio-card").forEach((el) => {
  el.classList.add("reveal");
  observer.observe(el);
});
