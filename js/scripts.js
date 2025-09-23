$(function() {

    
    $('.banner__content').on('click', function(){
        // $('.banner').slideUp();
        $('.banner').hide();
    });

    const burger = $('.burger');
    const menu = $('.header__nav');
    
    
    burger.on('click', function(e) {
        e.preventDefault();
        burger.toggleClass('burger--close');
    
        // menu.toggle(300);
        // $('html, body').toggleClass('overflow');
    });
    
    $(document).keyup(function(e) {
        if (e.key === "Escape" || e.keyCode === 27) {
            // menu.hide(300);
            burger.removeClass('burger--close');
            // $('html, body').removeClass('overflow');
        }
    });
    
    // $('body').on('click', '.navigation__menu a[href*="#"]', function(e) {
    // 	var fixed_offset = 70;
    
    // 	$('html,body').stop().animate({
    // 			scrollTop: $(this.hash).offset().top - fixed_offset
    // 	}, 500);
    
    // 	e.preventDefault();
    // 	menu.removeClass('open');
    // 	burger.removeClass('header__burger--close');
    // });
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
    
    // let swiperinit = false;
    // let mobileswiper;
    
    // function swiperOn() {
    //     if (window.innerWidth <= 576) {
    //         $('.price__list').wrapInner('<div class="swiper-wrapper"></div>');
    //         swiperinit = true;
    //         mobileswiper = new Swiper('.price__list', {
    //             slideClass: 'price__item',
    //             slidesPerView: 1.4,
    //             spaceBetween: 16, 
    //         });
    //     } else if (swiperinit) {
    //         $('.price__list .swiper-wrapper').contents().unwrap();
    //         $('.price__list .price__item').removeAttr('style');    
    //         //mobileswiper.destroy(true, true); 
    //         swiperinit = false;
    //     }
    // }
    
    // swiperOn();
    // $(window).resize(swiperOn); 
    
    
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

});