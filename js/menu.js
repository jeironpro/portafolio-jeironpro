const menuIcono = document.querySelector('.menu');
const enlaces = document.querySelector('.lista-enlaces');

menuIcono.addEventListener('click', () => {
    enlaces.classList.toggle('mostrar');
});