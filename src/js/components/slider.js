// const container = document.querySelector(".price__list");
// const options = {
//     enabled: true,
//     breakpoints: {
//       "(min-width: 576px)": {
//         enabled: false,
//       },
//     },
// };

// Carousel(container, options).init();

// const priceSlider = new Swiper('.swiper', {
//     // loop: true,
//     // enabled: false,
//     slidesPerView: 1.5,
//     spaceBetween: 16,
//     // breakpoints: {
//     //     1200: {
//     //         slidesPerView: 3.2,
//     //         spaceBetween: 24,
//     //     },
//     //     894: {
//     //         slidesPerView: 1.6,
//     //         spaceBetween: 20,
//     //     },
//     // },
//     // navigation: {
//     //   nextEl: '.swiper-button-next',
//     //   prevEl: '.swiper-button-prev',
//     // },
// });

// priceSlider.disable();

// $(window).resize(function(){
//     priceSlider.update();
// });

let swiperinit = false;
let mobileswiper;

function swiperOn() {
    if (window.innerWidth <= 576) {
        $('.price__list').wrapInner('<div class="swiper-wrapper"></div>');
        swiperinit = true;
        mobileswiper = new Swiper('.price__list', {
            slideClass: 'price__item',
            slidesPerView: 1.4,
            spaceBetween: 16, 
        });
    } else if (swiperinit) {
        $('.price__list .swiper-wrapper').contents().unwrap();
        $('.price__list .price__item').removeAttr('style');    
        //mobileswiper.destroy(true, true); 
        swiperinit = false;
    }
}

swiperOn();
$(window).resize(swiperOn); 


let swiperinit1 = false;
let mobileswiper1;

function swiperOn1() {
    if (window.innerWidth <= 576) {
        $('.compare__tabs-content .tab-item').wrapInner('<div class="swiper-wrapper"></div>');
        swiperinit1 = true;
        mobileswiper1 = new Swiper('.compare__tabs-content .tab-item', {
            slideClass: 'compare__card',
            slidesPerView: 1.4,
            spaceBetween: 16,
            on: {
                init: function () {
                    console.log("Swiper initialized!");

                    let min = 400;

                    // if ($(window).width() <= '1280'){
                    //     min = 360;
                    // } else if ($(window).width() <= '576'){
                    //     min = 300;
                    // }

                    $(".ta").each(function(indx, el) {

                        let b = $(el),
                            max = el.scrollHeight,
                            a = b.next(".read-next");
                            a.show();
                        if (max <= min) a.hide();
                        else a.on("click", function(event) {
                            let h = b.height();
                            b.height(h < max ? max : min);
                            $(this).text(h < max ? "Свернуть" : "Развернуть");
                            return false
                        })
                    });
                },
                // slideChange: function () {
                //     console.log("Slide changed!");

                //     let min = 400;

                //     if ($(window).width() <= '1280'){
                //         min = 360;
                //     } else if ($(window).width() <= '576'){
                //         min = 300;
                //     }

                //     $(".ta").each(function(indx, el) {

                //         let b = $(el),
                //             max = el.scrollHeight,
                //             a = b.next(".read-next");
                //             a.show();
                //         if (max <= min) a.hide();
                //         else a.on("click", function(event) {
                //             let h = b.height();
                //             b.height(h < max ? max : min);
                //             $(this).text(h < max ? "Свернуть" : "Развернуть");
                //             return false
                //         })
                //     });
                // },
            },
        });
    } else if (swiperinit) {
        $('.compare__tabs-content .tab-item .swiper-wrapper').contents().unwrap();
        $('.compare__tabs-content .tab-item .compare__card').removeAttr('style');    
        //mobileswiper.destroy(true, true); 
        swiperinit1 = false;
    }
}

swiperOn1();
$(window).resize(swiperOn1);