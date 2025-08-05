const modal = document.getElementById('modal');
const modalImagen = document.getElementById('modal-imagen');
const cerrarModal = document.getElementById('modal-cerrar');
const contenedorCertificaciones = document.getElementById('contenedor-certificaciones');

contenedorCertificaciones.addEventListener('click', (e) => {
    const button = e.target.closest('.previsualizar');
    if (button) {
        const fuenteImagen = button.getAttribute('data-img');
        modalImagen.src = fuenteImagen;
        modal.classList.add('mostrar');
    }
});

cerrarModal.addEventListener('click', () => {
    modal.classList.remove('mostrar');
    modalImagen.src = '';
});