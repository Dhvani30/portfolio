function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault(); // Prevent the default anchor click behavior
    const targetId = this.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    // Scroll to the target section
    targetSection.scrollIntoView({
      behavior: "smooth", // Smooth scroll
      block: "start", // Align at the start of the section
    });
  });
});