import Swiper, {Navigation,Pagination,EffectCoverflow,Autoplay, Parallax} from 'swiper';


    const heroSlider = new Swiper('.hero__slider', {
        modules: [Navigation,Autoplay,Pagination, Parallax],
        direction: 'horizontal',
        loop: false,
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 300,

        parallax: true,

        autoplay: {
            delay: 3000,
            disableOnInteraction: true,
            pauseOnMouseEnter: 'false',
            stopOnLastSlide: false,
        },

        navigation: {
            nextEl: '.slider-main__btn-next',
            prevEl: '.slider-main__btn-prev',
        },

        pagination: {
            el: '.slider-main-pagination',
            type: 'bullets',
            clickable: 'false',
            dynamicBullets: false,
        },
    })
    const brandsSlider = new Swiper('.brands__slider', {
        modules: [Navigation,Autoplay],
        direction: 'horizontal',
        loop: false,
        slidesPerView: 5,
        spaceBetween: 20,
        speed: 300,

        autoplay: {
            delay: 3000,
            disableOnInteraction: true,
            pauseOnMouseEnter: 'false',
            stopOnLastSlide: false,
        },

        navigation: {
            nextEl: '#brands-slide-next',
            prevEl: '#brands-slide-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 2,
                spaceBetween: 0
            },
            425: {
                slidesPerView: 2,
                spaceBetween: 0
            },
            630: {
                slidesPerView: 3,
                spaceBetween: 0
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 0
            },

            1024: {
                slidesPerView: 5,
                spaceBetween: 0
            },
        },

    })
    const reviewsSlider = new Swiper('.reviews__slider', {
        modules: [Navigation,Pagination,EffectCoverflow],
        direction: 'horizontal',
        loop: false,
        slidesPerView: 2,
        spaceBetween: 20,
        speed: 300,

        navigation: {
            nextEl: '#reviews-slide-next',
            prevEl: '#reviews-slide-prev',
        },
        pagination: {
            el: '#reviews-slider-pagination',
            type: 'bullets',
            clickable: 'false',
            dynamicBullets: false,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: -30
            },

            769: {
                slidesPerView: 2,
                spaceBetween: 20
            },
        },
    })
    const thisBrandSlider = new Swiper('.this-brand-slider', {
        modules: [Navigation,Pagination],
        direction: 'horizontal',
        loop: false,
        slidesPerView: 2,
        spaceBetween: 20,
        speed: 300,

        navigation: {
            nextEl: '#brand-next',
            prevEl: '#brand-prev',
        },
        pagination: {
            el: '#brand-pagination',
            type: 'bullets',
            clickable: 'false',
            dynamicBullets: false,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            425: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 20
            },
        },
    })
    const recomendedSlider = new Swiper('.recomended-slider', {
        modules: [Navigation,Pagination],
        direction: 'horizontal',
        loop: false,
        slidesPerView: 2,
        spaceBetween: 20,
        speed: 300,

        navigation: {
            nextEl: '#recomended-next',
            prevEl: '#recomended-prev',
        },
        pagination: {
            el: '#recomended-pagination',
            type: 'bullets',
            clickable: 'false',
            dynamicBullets: false,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            425: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 20
            },
        },
    })
    const similarSlider = new Swiper('.similar-slider', {
        modules: [Navigation,Pagination],
        direction: 'horizontal',
        loop: false,
        slidesPerView: 2,
        spaceBetween: 20,
        speed: 300,

        navigation: {
            nextEl: '#similar-next',
            prevEl: '#similar-prev',
        },
        pagination: {
            el: '#similar-pagination',
            type: 'bullets',
            clickable: 'false',
            dynamicBullets: false,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            425: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 20
            },
        },
    })
