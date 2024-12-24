'use strict';
const showBtn = document.querySelectorAll('.show-modal');
const modal = document.querySelectorAll('.modal');
const hideModal = document.querySelectorAll('.hide-modal');
const overlay = document.querySelector('.overlay');
const btns = document.querySelector('.buttons');
const removeHidden = function (i) {
    modal[i].classList.add('hidden');
    btns.classList.remove('hidden');
    overlay.classList.add('hidden');
}
const showHidden = function (i) {
    modal[i].classList.remove('hidden');
    btns.classList.add('hidden');
    overlay.classList.remove('hidden');
}
for (let i = 0; i < showBtn.length; i++) {
    showBtn[i].addEventListener('click', function () {
        showHidden(i);
    })
    hideModal[i].addEventListener('click', function () {
        removeHidden(i);
    })
    overlay.addEventListener('click', function () {
        removeHidden(i);
    })
}