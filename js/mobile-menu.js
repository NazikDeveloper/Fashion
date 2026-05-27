
const toggleButtons = document.querySelectorAll('[data-toggle]');

toggleButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Отримуємо значення селектора (наприклад, "#modal-login" або ".mobile-menu")
    const targetSelector = button.getAttribute('data-toggle');
    // Знаходимо цей елемент на сторінці
    const targetElement = document.querySelector(targetSelector);

    if (targetElement) {
      // Якщо це мобільне меню — перемикаємо 'is-open', для інших — 'is-hidden'
      if (targetElement.classList.contains('mobile-menu')) {
        targetElement.classList.toggle('is-open');
      } else {
        targetElement.classList.toggle('is-hidden');
      }
    }
  });
});

// Закриття меню при кліку на посилання
const mobileLinks = document.querySelectorAll('.mobile-menu__link');
mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.mobile-menu').classList.remove('is-open');
  });
});
