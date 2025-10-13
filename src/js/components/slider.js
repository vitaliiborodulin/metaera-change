let swiperPriceInit = false;
let mobilePriceSwiper;

function swiperPriceOn() {
    if (window.innerWidth <= 576) {
        $('.price__list').wrapInner('<div class="swiper-wrapper"></div>');
        swiperPriceInit = true;
        mobilePriceSwiper = new Swiper('.price__list', {
            slideClass: 'price__item',
            slidesPerView: 1.4,
            spaceBetween: 16, 
        });
    } else if (swiperPriceInit) {
        $('.price__list .swiper-wrapper').contents().unwrap();
        $('.price__list .price__item').removeAttr('style');    
        //mobileswiper.destroy(true, true); 
        swiperPriceInit = false;
    }
}

swiperPriceOn();
$(window).resize(swiperPriceOn);

// support

let swiperSupportInit = false;
let mobileSupportSwiper;

function swiperSupportOn() {
    if (window.innerWidth >= 576 & window.innerWidth <= 768) {
        $('.support__list').wrapInner('<div class="swiper-wrapper"></div>');
        swiperSupportInit = true;
        mobileswiper = new Swiper('.support__list', {
            slideClass: 'support__item',
            slidesPerView: 1.4,
            spaceBetween: 16, 
        });
    } else if (swiperSupportInit) {
        $('.support__list .swiper-wrapper').contents().unwrap();
        $('.support__list .support__item').removeAttr('style');    
        //mobileswiper.destroy(true, true); 
        swiperSupportInit = false;
    }
}

swiperSupportOn();
$(window).resize(swiperSupportOn); 


// let swiperinit1 = false;
// let mobileswiper1;

// function swiperOn1() {
//     if (window.innerWidth <= 576) {
//         $('.compare__tabs-content .tab-item').wrapInner('<div class="swiper-wrapper"></div>');
//         swiperinit1 = true;
//         mobileswiper1 = new Swiper('.compare__tabs-content .tab-item', {
//             slideClass: 'compare__card',
//             slidesPerView: 1.4,
//             spaceBetween: 16,
//             on: {
//                 init: function () {
//                     console.log("Swiper initialized!");

//                     let min = 400;

//                     // if ($(window).width() <= '1280'){
//                     //     min = 360;
//                     // } else if ($(window).width() <= '576'){
//                     //     min = 300;
//                     // }

//                     $(".ta").each(function(indx, el) {

//                         let b = $(el),
//                             max = el.scrollHeight,
//                             a = b.next(".read-next");
//                             a.show();
//                         if (max <= min) a.hide();
//                         else a.on("click", function(event) {
//                             let h = b.height();
//                             b.height(h < max ? max : min);
//                             $(this).text(h < max ? "Свернуть" : "Развернуть");
//                             return false
//                         })
//                     });
//                 },
//                 // slideChange: function () {
//                 //     console.log("Slide changed!");

//                 //     let min = 400;

//                 //     if ($(window).width() <= '1280'){
//                 //         min = 360;
//                 //     } else if ($(window).width() <= '576'){
//                 //         min = 300;
//                 //     }

//                 //     $(".ta").each(function(indx, el) {

//                 //         let b = $(el),
//                 //             max = el.scrollHeight,
//                 //             a = b.next(".read-next");
//                 //             a.show();
//                 //         if (max <= min) a.hide();
//                 //         else a.on("click", function(event) {
//                 //             let h = b.height();
//                 //             b.height(h < max ? max : min);
//                 //             $(this).text(h < max ? "Свернуть" : "Развернуть");
//                 //             return false
//                 //         })
//                 //     });
//                 // },
//             },
//         });
//     } else if (swiperinit) {
//         $('.compare__tabs-content .tab-item .swiper-wrapper').contents().unwrap();
//         $('.compare__tabs-content .tab-item .compare__card').removeAttr('style');    
//         //mobileswiper.destroy(true, true); 
//         swiperinit1 = false;
//     }
// }

// swiperOn1();
// $(window).resize(swiperOn1);