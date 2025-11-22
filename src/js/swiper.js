import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

new Swiper('#clients-saying', {
  modules: [Pagination],
  loop: true,
  slidesPerView: 2,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
  },
});