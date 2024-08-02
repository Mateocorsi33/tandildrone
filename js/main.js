// Inicializa Swiper
const swiper = new Swiper('.swiper', {
  speed: 400,
  spaceBetween: 100,
  autoplay: {
    delay: 3000, // Tiempo de espera entre cada diapositiva (en milisegundos)
    disableOnInteraction: false, // No deshabilitar autoplay en interacción
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.custom-button-next',
    prevEl: '.custom-button-prev',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
});
