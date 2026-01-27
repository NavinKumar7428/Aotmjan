// Navbar background change on scroll
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("bg-black");
  } else {
    navbar.classList.remove("bg-black");
  }
});

// Scroll reveal animation (simple)
const sections = document.querySelectorAll(".principle-section");

window.addEventListener("scroll", () => {
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const triggerPoint = window.innerHeight - 100;

    if (sectionTop < triggerPoint) {
      section.style.opacity = "1";
      section.style.transform = "translateY(0)";
    }
  });
});

// Initial hidden state
sections.forEach(section => {
  section.style.opacity = "0";
  section.style.transform = "translateY(40px)";
  section.style.transition = "all 0.6s ease";
});
