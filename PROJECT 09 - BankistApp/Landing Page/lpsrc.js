'use strict';
const textBtn = document.querySelector('.btn--scroll-to');
const navLinksList = document.querySelector('.nav__links');
const tabBtns = document.querySelectorAll('.operations__tab');
const tabBtnsContainer = document.querySelector('.operations__tab-container');
const contentContainer = document.querySelectorAll('.operations__content');
// Learn More button scroll effect
textBtn.addEventListener('click', () => {
  document.querySelector('#section--1').scrollIntoView({ behavior: 'smooth' });
});

// Nav list scroll effect
navLinksList.addEventListener('click', e => {
  e.preventDefault();
  if (e.target.classList.contains('nav__link')) {
    let targetSection = e.target.getAttribute('href');
    document
      .querySelector(targetSection)
      .scrollIntoView({ behavior: 'smooth' });
  }
});

// Tabbed Component on operation sections

tabBtnsContainer.addEventListener('click', e => {
  //Grabbing the event
  let tabClicked = e.target.closest('.operations__tab');
  console.log(tabClicked);
  if (!tabClicked) return;

  //Remove classes
  tabBtns.forEach(b => {
    b.classList.remove('operations__tab--active');
  });
  contentContainer.forEach(c => {
    c.classList.remove('operations__content--active');
  });

  //Adding classes
  document
    .querySelector(
      `.operations__content--${tabClicked.getAttribute('data-tab')}`
    )
    .classList.add('operations__content--active');
  tabClicked.classList.add('operations__tab--active');
});
