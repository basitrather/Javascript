'use strict';
const showBtn = document.querySelectorAll('.show-modal');
const modal = document.querySelectorAll('.modal');
const hideModal = document.querySelectorAll('.hide-modal');
const overlay = document.querySelector('.overlay');
const btns = document.querySelector('.buttons');
const hide = function (i) {
    modal[i].classList.add('hidden');
    overlay.classList.add('hidden');
    btns.classList.remove('hidden');
}
const showHidden = function (i) {
    modal[i].classList.remove('hidden');
    overlay.classList.remove('hidden');
    btns.classList.add('hidden');
}
for (let i = 0; i < showBtn.length; i++) {
    showBtn[i].addEventListener('click', function () {
        showHidden(i);
    })
    hideModal[i].addEventListener('click', function () {
        hide(i);
    })
    overlay.addEventListener('click', function () {
        hide(i);
    })
    document.addEventListener('keydown',function(press){
        console.log(press.key);
        if(press.key==='Escape'){
            hide(i);
        }
    });
}

