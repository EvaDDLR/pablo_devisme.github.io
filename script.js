const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

// Open and close the mobile menu
menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");

  menuToggle.setAttribute("aria-expanded", isOpen);
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Fermer le menu" : "Ouvrir le menu"
  );

  menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Close the menu after clicking a navigation link
nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Ouvrir le menu");
    menuToggle.textContent = "☰";
  });
});

// Automatically update the copyright year
document.querySelector("#year").textContent =
  new Date().getFullYear();
