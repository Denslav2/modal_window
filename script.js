
const modalOpen = document.querySelector('[data-open]'),
    modal = document.querySelector('.modal'),
    modalClose = document.querySelector('[data-close]');

    modalOpen.addEventListener('click', () => {
        modal.classList.add('show');
        modal.classList.remove('hide');
    });

    modalClose.addEventListener('click', () => {
        modal.classList.add('hide');
        modal.classList.remove('show');
    });