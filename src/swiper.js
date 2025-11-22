import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

new Swiper('#clients-saying', {
    modules: [Pagination],
    loop: true,
    slidesPerView: 1.3,
    // centeredSlides: true,
    speed: 500,
    pagination: {
        el: ".swiper-pagination",
    },
});