document.addEventListener("DOMContentLoaded", function () {
  const menuBtns = document.querySelectorAll("#menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  let isMenuOpen = false;

  // Toggle menu function
  function toggleMenu(e) {
    e.stopPropagation();
    isMenuOpen = !isMenuOpen;
    mobileMenu.classList.toggle("active");

    // Update icon based on menu state
    menuBtns.forEach((btn) => {
      const icon = btn.querySelector("i");
      if (icon) {
        icon.className = isMenuOpen ? "fa-solid fa-x" : "fa-solid fa-bars";
      }
    });
  }

  // Add click handler to all menu buttons
  menuBtns.forEach((btn) => {
    btn.addEventListener("click", toggleMenu);
  });

  // Close menu when clicking anywhere else
  document.addEventListener("click", function (e) {
    if (isMenuOpen && !mobileMenu.contains(e.target)) {
      isMenuOpen = false;
      mobileMenu.classList.remove("active");

      // Reset icons
      menuBtns.forEach((btn) => {
        const icon = btn.querySelector("i");
        if (icon) {
          icon.className = "fa-solid fa-bars";
        }
      });
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
});
