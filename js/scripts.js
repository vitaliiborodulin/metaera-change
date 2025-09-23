$(function() {

    
    $('.banner__content').on('click', function(){
        // $('.banner').slideUp();
        $('.banner').hide();
    });

    $('.tabs-wrapper').each(function() {
      let ths = $(this);
      ths.find('.tab-item').not(':first').hide();
      ths.find('.tab').click(function() {
        ths.find('.tab').removeClass('active').eq($(this).index()).addClass('active');
        ths.find('.tab-item').hide().eq($(this).index()).fadeIn()
      }).eq(0).addClass('active');
    });
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
                // breakpoints: {
                //     0: {
                //         slidesPerView: 1,
                //     },
                //     576: {
                //         slidesPerView: 2,
                //     }
                // },   
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

});