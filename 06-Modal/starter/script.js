'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelectorAll('.show-modal');
const btnCross = document.querySelector('.close-modal');

for (let i = 0; i < btnCloseModal.length; i++) {
    btnCloseModal[i].addEventListener('click', function () {
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    });
}

btnCross.addEventListener('click', function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
});

overlay.addEventListener('click', function () {
    overlay.classList.add('hidden');
    modal.classList.add('hidden');
})

document.addEventListener('keydown', function (e) {
    console.log(e);
    if (e.key === 'Escape') {
        overlay.classList.add('hidden');
        modal.classList.add('hidden');
    }
})