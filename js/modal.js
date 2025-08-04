const modal = document.getElementById('modal');
const modalImagen = document.getElementById('modal-imagen');
const cerrarModal = document.getElementById('modal-cerrar');

document.querySelectorAll('.previsualizar').forEach(button => {
    button.addEventListener('click', (e) => {
        e.stopPropagation();
        
        const fuenteImagen = button.getAttribute('data-img');
        modalImagen.src = fuenteImagen;
        modal.classList.add('mostrar');
    });
});

cerrarModal.addEventListener('click', () => {
    modal.classList.remove('mostrar');
    modalImagen.src = '';
});

document.querySelectorAll('.tarjeta').forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('flip');
    });
});