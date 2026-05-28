const toggleButtons = document.querySelectorAll("[data-toggle]");

toggleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const targetSelector = button.getAttribute("data-toggle");
    const targetElement = document.querySelector(targetSelector);

    // Якщо кнопка знаходиться всередині mobile-menu
    const mobileMenu = document.querySelector(".mobile-menu");

    if (button.dataset.closeMenu === "true") {
      mobileMenu.classList.remove("is-open");
    }

    if (targetElement) {
      if (targetElement.classList.contains("mobile-menu")) {
        targetElement.classList.toggle("is-open");
      } else {
        targetElement.classList.toggle("is-hidden");
      }
    }
  });
});

// Закриття меню при кліку на посилання
const mobileLinks = document.querySelectorAll(".mobile-menu__link");

mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelector(".mobile-menu").classList.remove("is-open");
  });
});
