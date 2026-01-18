'use strict';

const textBtn = document.querySelector('.btn--scroll-to');
const navLinksList = document.querySelector('.nav__links');
const tabBtns = document.querySelectorAll('.operations__tab');
const tabBtnsContainer = document.querySelector('.operations__tab-container');
const contentContainer = document.querySelectorAll('.operations__content');
const navBar = document.querySelector('.nav');
const section1 = document.querySelector('#section--1');
const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
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
      `.operations__content--${tabClicked.getAttribute('data-tab')}`,
    )
    .classList.add('operations__content--active');
  tabClicked.classList.add('operations__tab--active');
});

//Animating the link fade out
const fadeOut = function (ev) {
  if (ev.target.classList.contains('nav__link')) {
    const hoverOver = ev.target;
    const linkSiblings = ev.target
      .closest('.nav')
      .querySelectorAll('.nav__link');
    const logo = ev.target.closest('.nav').querySelector('img');
    linkSiblings.forEach(element => {
      if (element !== hoverOver) {
        element.style.opacity = this;
      }
      logo.style.opacity = this;
    });
  }
};
navBar.addEventListener('mouseover', fadeOut.bind(0.5));
navBar.addEventListener('mouseout', fadeOut.bind(1));

//Sticky scroll effect via window scroll (Old school way)
// const initiateSecOne = section1.getBoundingClientRect();
// window.addEventListener('scroll', function () {
//   if (window.scrollY > initiateSecOne.top) {
//     navBar.classList.add('sticky');
//   } else {
//     navBar.classList.remove('sticky');
//   }
// });

//Sticky scroll effect via IntersectionObserver API

const navHeight = navBar.getBoundingClientRect().height;
const observerFunction = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    navBar.classList.add('sticky');
  } else {
    navBar.classList.remove('sticky');
  }
};
const observerOptions = {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
};
const observer = new IntersectionObserver(observerFunction, observerOptions);
observer.observe(header);

//Revealing elements on scroll

const revealSectionObsFn = function (entries, observer) {
  entries.forEach(viewportEntry => {
    if (viewportEntry.isIntersecting)
      viewportEntry.target.classList.remove('section--hidden');
    if (!viewportEntry.isIntersecting)
      viewportEntry.target.classList.add('section--hidden');
    // observer.unobserve(viewportEntry.target);
  });
};
const revealSectionOpt = {
  root: null,
  threshold: 0.15,
};
const revealSectionObserver = new IntersectionObserver(
  revealSectionObsFn,
  revealSectionOpt,
);
allSections.forEach(element => {
  revealSectionObserver.observe(element);
  element.classList.add('section--hidden');
});

//Lazy loading the Images
const lazyImages = document.querySelectorAll('img[data-src]');
const loadImageFn = function (entries, observer) {
  const [imageEntry] = entries;
  if (!imageEntry.isIntersecting) return;

  //Lazy loading images
  imageEntry.target.src = imageEntry.target.dataset.src;
  imageEntry.target.addEventListener('load', function () {
    imageEntry.target.classList.remove('lazy-img');
  });
  observer.unobserve(imageEntry.target);
};
const imageObserver = new IntersectionObserver(loadImageFn, {
  root: null,
  threshold: 0,
  rootMargin: `150px`,
});
lazyImages.forEach(ele => {
  imageObserver.observe(ele);
});

// Slider component
const sliderContainer = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const sliderRightBtn = document.querySelector('.slider__btn--right');
const sliderLeftBtn = document.querySelector('.slider__btn--left');
const dotContainer = document.querySelector('.dots');
let currentSlide = 0;
let totalSlide = slides.length;

//Styling components
slides.forEach((slide, slideINX) => {
  slide.style.transform = `translateX(${slideINX * 100}%)`;
});

//Function for sliding the components
const sliderfn = function () {
  slides.forEach((slide, sliderInx) => {
    slide.style.transform = `translateX(${100 * (sliderInx - currentSlide)}%)`;
  });
};

//Show active dot
const activeDot = function (slide) {
  // Remove the current slide
  document
    .querySelectorAll('.dots__dot')
    .forEach(dot => dot.classList.remove('dots__dot--active'));

  //Add bgc
  const temp = document.querySelector(`.dots__dot[data-slide="${slide}"]`);
  temp.classList.add('dots__dot--active');
};
//Show dots on DOM
const createDots = function () {
  slides.forEach((_, ind) => {
    dotContainer.insertAdjacentHTML(
      'beforeend',
      `<button class="dots__dot" data-slide="${ind}"></button>`,
    );
  });
};
//Right slider Btn functionality
sliderRightBtn.addEventListener('click', function () {
  if (currentSlide === totalSlide - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  sliderfn(currentSlide);
  activeDot(currentSlide);
});

//left slider Btn functionality
sliderLeftBtn.addEventListener('click', function () {
  if (currentSlide === 0) {
    currentSlide = totalSlide - 1;
  } else {
    currentSlide--;
  }
  sliderfn(currentSlide);
  activeDot(currentSlide);
});

//Keydown press for right and left arrow
document.addEventListener('keydown', function (e) {
  if (e.key === 'ArrowLeft') {
    if (currentSlide === 0) {
      currentSlide = totalSlide - 1;
    } else {
      currentSlide--;
    }
    sliderfn(currentSlide);
    activeDot(currentSlide);
  }
  if (e.key === 'ArrowRight') {
    if (currentSlide === totalSlide - 1) {
      currentSlide = 0;
    } else {
      currentSlide++;
    }
    activeDot(currentSlide);
  }
});
dotContainer.addEventListener('click', function (e) {
  if (e.target.classList.contains('dots__dot')) {
    currentSlide = e.target.dataset.slide;
    sliderfn(currentSlide);
    activeDot(currentSlide);
  }
});
createDots();
activeDot(currentSlide);
