document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  let isMenuOpen = false;

  // Toggle menu
  menuBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    isMenuOpen = !isMenuOpen;
    mobileMenu.classList.toggle("active");
  });

  // Close menu when clicking anywhere else
  document.addEventListener("click", function (e) {
    if (isMenuOpen && !mobileMenu.contains(e.target)) {
      mobileMenu.classList.remove("active");
      isMenuOpen = false;
    }
  });

  // Handle menu item clicks
  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", function () {
      mobileMenu.classList.remove("active");
      isMenuOpen = false;

      // Smooth scroll to section
      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Add form handling
  document
    .getElementById("contact-form")
    ?.addEventListener("submit", async (e) => {
      e.preventDefault();

      // Add your form submission logic here
      // Example:
      const formData = new FormData(e.target);
      // ... handle form submission
    });

  // Add scroll-to-top button
  const scrollButton = document.createElement("button");
  scrollButton.innerHTML = "↑";
  scrollButton.className =
    "fixed bottom-8 right-8 bg-blue-500 text-white w-10 h-10 rounded-full shadow-lg hover:bg-blue-600 transition hidden";
  document.body.appendChild(scrollButton);

  window.addEventListener("scroll", () => {
    scrollButton.classList.toggle("hidden", window.scrollY < 500);
  });

  scrollButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
