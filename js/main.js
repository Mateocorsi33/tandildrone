let startX, scrollLeft, isDown = false;

const carrusel = document.querySelector('.carrusel');

carrusel.addEventListener('mousedown', (e) => {
    isDown = true;
    carrusel.classList.add('active');
    startX = e.pageX - carrusel.offsetLeft;
    scrollLeft = carrusel.scrollLeft;
});

carrusel.addEventListener('mouseleave', () => {
    isDown = false;
    carrusel.classList.remove('active');
});

carrusel.addEventListener('mouseup', () => {
    isDown = false;
    carrusel.classList.remove('active');
});

carrusel.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - carrusel.offsetLeft;
    const walk = (x - startX) * 3; // Ajusta la velocidad del desplazamiento
    carrusel.scrollLeft = scrollLeft - walk;
});

carrusel.addEventListener('touchstart', (e) => {
    startX = e.touches[0].pageX - carrusel.offsetLeft;
    scrollLeft = carrusel.scrollLeft;
    isDown = true;
});

carrusel.addEventListener('touchend', () => {
    isDown = false;
});

carrusel.addEventListener('touchmove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.touches[0].pageX - carrusel.offsetLeft;
    const walk = (x - startX) * 3; // Ajusta la velocidad del desplazamiento
    carrusel.scrollLeft = scrollLeft - walk;
});
