// import Swiper JS
import Swiper from 'swiper';

import { Navigation, Pagination } from 'swiper/modules';

const swiper = new Swiper('.swiper.about-me__skills-wrapper', {
  modules: [Navigation, Pagination],
  slidesPerView: 2,
  spaceBetween: 0,
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
    1440: {
      slidesPerView: 6,
      spaceBetween: 0,
    },
  },
  navigation: {
    nextEl: '.about-be__skills-button',
  },
});
