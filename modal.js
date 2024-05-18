const modalBackdrop = document.querySelector('.backdrop');
const modalBtnOpen = document.querySelector('.modal-btn-open');
const modalBtnClose = document.querySelector('.modal-btn-close');

const toggleModal = () => {
    modalBackdrop.classList.toggle('is-hidden');
}

modalBtnOpen.addEventListener('click', toggleModal);
modalBtnClose.addEventListener('click', toggleModal);

window.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) {
        toggleModal();
    }
});