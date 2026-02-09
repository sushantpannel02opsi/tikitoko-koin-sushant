const body = document.body;

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");
const themeBtn = document.getElementById("themeBtn");

const year = document.getElementById("year");
year.textContent = new Date().getFullYear();

menuBtn?.addEventListener("click", () => {
  nav.classList.toggle("open");
});

document.addEventListener("click", (e) => {
  if (!nav.contains(e.target) && e.target !== menuBtn) nav.classList.remove("open");
});

// FAQ accordion
document.querySelectorAll(".faq-q").forEach((btn) => {
  btn.addEventListener("click", () => {
    const ans = btn.nextElementSibling;
    const isOpen = ans.style.display === "block";
    document.querySelectorAll(".faq .faq-a").forEach(a => (a.style.display = "none"));
    ans.style.display = isOpen ? "none" : "block";
  });
});

// Theme toggle (stores preference)
const saved = localStorage.getItem("theme");
if (saved === "light") body.classList.add("light");

themeBtn?.addEventListener("click", () => {
  body.classList.toggle("light");
  localStorage.setItem("theme", body.classList.contains("light") ? "light" : "dark");
});

// Example CTA actions
document.getElementById("ctaTop")?.addEventListener("click", () => alert("CTA clicked!"));
document.getElementById("ctaHero")?.addEventListener("click", () => alert("Let’s go!"));
document.getElementById("demoBtn")?.addEventListener("click", () => {
  document.getElementById("features")?.scrollIntoView({ behavior: "smooth" });
});
