document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".mySwiper");

  const swiper = new Swiper(".mySwiper", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,

    breakpoints: {
      320: {
        slidesPerView: 2,
      },
      480: {
        slidesPerView: 3,
      },
      640: {
        slidesPerView: 4,
      },
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
      },
    

    pagination: {
      el: ".swiper-pagination",
    },

    mousewheel: true,
    keyboard: true,
  });

  container.classList.remove("swiper-hidden");
  container.classList.add("swiper-ready");
});