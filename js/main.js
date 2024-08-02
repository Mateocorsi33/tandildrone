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

document.getElementById("menu").addEventListener("click", toggleMenu);
document.getElementById("close-menu").addEventListener("click", closeMenu);

function toggleMenu() {
    const menu = document.getElementById("ver-menu");
    if (menu.classList.contains('abierto')) {
        menu.classList.remove('abierto');
    } else {
        menu.classList.add('abierto');
    }
    console.log("toggleMenu");
}

function closeMenu() {
    document.getElementById("ver-menu").classList.remove('abierto');
    console.log("closeMenu");
}
