// Modal window

let headerBtn = document.querySelector('.header__btn-authorization');
let headerBtn320 = document.querySelector('.header__btn-authorization-320');
let modal = document.querySelector('.modal');
let modalClose = document.querySelector('.modal__btn');
let body = document.querySelector('.html');

headerBtn.addEventListener('click', () => {
  modal.classList.add('modal-active');
  body.classList.add('stop-scroll');
});

modalClose.addEventListener('click', () => {
  modal.classList.remove('modal-active');
  body.classList.remove('stop-scroll');
});

// Burger

let burger = document.querySelector('.burger');
let BurgerMenu = document.querySelector('.header__nav');
let BurgerMenuLink = document.querySelectorAll('.header-nav__link');

burger.addEventListener('click', () => {
  burger.classList.toggle('burger--active');
  BurgerMenu.classList.toggle('header__nav--active');
  document.body.classList.toggle('stop-scroll');
});

BurgerMenuLink.forEach( bml => {
  bml.addEventListener('click', () => {
    burger.classList.remove('burger--active');
    BurgerMenu.classList.remove('header__nav--active');
    document.body.classList.remove('stop-scroll');
  });
});

// Search bar

let headerBtnSearch = document.querySelector('.header__btn-search');
let headerNavItem = document.querySelectorAll('.nav__item:nth-last-child(-n+2)');
let searchBar = document.querySelector('.search-bar');
let searchBarBtn = document.querySelector('.search-bar__btn');

headerBtnSearch.addEventListener('click', () => {
  headerBtnSearch.classList.add('header__btn-search--none');
  headerNavItem.forEach(hni => {
    hni.classList.add('header__nav--none');
  });
  searchBar.classList.add('header__search-bar--active');
});
searchBarBtn.addEventListener('click', () => {
  headerBtnSearch.classList.remove('header__btn-search--none');
  headerNavItem.forEach(hni => {
    hni.classList.remove('header__nav--none');
  });
  searchBar.classList.remove('header__search-bar--active');
});

// Header audio

let btnHeaderAudio = document.querySelectorAll('.header__audio');
btnHeaderAudio.forEach( h => {
  let play = h.querySelector('.header-audio-btn__play');
  let pause = h.querySelector('.header-audio-btn__pause');
  h.addEventListener('click', () => {
    play.classList.toggle('header-audio-btn__play--none');
    pause.classList.toggle('header-audio-btn__pause--active');
  });
});

let btnHeaderAudio768 = document.querySelector('.header-audio-btn-768');
let play768 = document.querySelector('.header-audio-btn-768__play');
let pause768 = document.querySelector('.header-audio-btn-768__pause');
btnHeaderAudio768.addEventListener('click', () => {
  play768.classList.toggle('header-audio-btn__play--none');
  pause768.classList.toggle('header-audio-btn__pause--active');
});

// Header audio 320

let headerBtnAudio320 = document.querySelector('.header__btn-320');
let headerAudio320 = document.querySelector('.header__320');
headerBtnAudio320.addEventListener('click', () => {
  headerBtnAudio320.classList.toggle('header__block-320--active');
  headerAudio320.classList.toggle('header__320--active');
});

let btnHeaderAudio320 = document.querySelectorAll('.header-audio-btn-320');
btnHeaderAudio320.forEach( bha320 => {
  let play320 = bha320.querySelector('.header-audio-btn-320__play');
  let pause320 = bha320.querySelector('.header-audio-btn-320__pause');
  bha320.addEventListener('click', () => {
    play320.classList.toggle('header-audio-btn__play--none');
    pause320.classList.toggle('header-audio-btn__pause--active');
  });
});

// Podcasts audio

let btnPodcastsAudio = document.querySelectorAll('.podcasts__btn');
btnPodcastsAudio.forEach( p => {
  let play = p.querySelector('.podcasts-btn__play');
  let pause = p.querySelector('.podcasts-btn__pause');
  p.addEventListener('click', () => {
    play.classList.toggle('podcasts-btn__play--none');
    pause.classList.toggle('podcasts-btn__pause--active');
  });
});

// Podcasts show more

const btnMore = document.querySelector('.podcasts-show-more__btn');
const showBlock = document.querySelectorAll('.podcasts__item');
btnMore.addEventListener('click', () => {
  showBlock.forEach(el => {
    el.classList.add('podcasts__item--visible');
  });
  btnMore.closest('.podcasts__show-more').classList.add('podcasts__show-more--hidden');
});

// Select

const element = document.querySelector('.transfers__select');
const choices = new Choices(element, {
  searchEnabled: false,
  itemSelectText: '',
  shouldSort: false
});

// Accordion

new Accordion('.guests__list');

let acop = document.querySelector('.guests__item:first-child');
acop.classList.add('is-active');

let acpanel = document.querySelector('.ac-panel');
acpanel.setAttribute('style', 'transition-duration: 600ms; height: auto;');

// Tabs

let workBtn = document.querySelectorAll('.guests-item-panel__btn');
let workItem = document.querySelectorAll('.guests__tab');
workBtn.forEach(element => {
  element.addEventListener('click', e => {
    const path = e.currentTarget.dataset.path;
    workBtn.forEach(btn => {
      btn.classList.remove('guests-item-panel__btn--active');
    });
    e.currentTarget.classList.add('guests-item-panel__btn--active');
    workItem.forEach(element => {
      element.classList.remove('guests__tab--active');
    });
    document.querySelector(`[data-target='${path}']`).classList.add('guests__tab--active');
  });
});

// Slider

const swiper = new Swiper('.swiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 2.2,
      slidesPerGroup: 2,
      spaceBetween: 10,
    },
    485: {
      slidesPerView: 1.6,
      slidesPerGroup: 1,
      spaceBetween: 10,
    },

    560: {
      slidesPerView: 1.8,
      slidesPerGroup: 1,
      spaceBetween: 10,
    },

    610: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 29,
    },
    840: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 30,
    },
    1090: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 120,
    },
    1591: {
      slidesPerView: 4,
      spaceBetween: 30,
    }
  }
});

//Form validate

const validator1 = new JustValidate('#modal__form');

validator1
  .addField('.name', [
    {
      rule: 'required',
      errorMessage: 'Ошибка'
    },
  ])
  .addField('.password', [
    {
      rule: 'required',
      errorMessage: 'Ошибка'
    },
  ]);

const validator2 = new JustValidate('#about-us__form');

validator2
  .addField('.textarea', [
    {
      rule: 'required',
      errorMessage: 'Ошибка'
    },
  ])
  .addField('.name', [
    {
      rule: 'required',
      errorMessage: 'Ошибка'
    },
  ])
  .addField('.email', [
    {
      rule: 'required',
      errorMessage: 'Ошибка'
    },
    {
      rule: 'email',
      errorMessage: 'Не соответствует формату email'
    },
  ])
  .addField('.form__checkbox', [
    {
      rule: 'required',
      errorMessage: 'Ошибка'
    },
  ]);

