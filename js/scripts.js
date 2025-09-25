$(function() {

    $('.banner__content').on('click', function(){
        // $('.banner').slideUp();
        $('.banner').hide();
        // $('.header__nav').css('top', '0');
        $('.header__nav').addClass('no-banner');
    });
    const burger = $('.burger');
    const menu = $('.header__nav');
    
    
    burger.on('click', function(e) {
        e.preventDefault();
        burger.toggleClass('burger--close');
        menu.toggleClass('open');
        // menu.toggle(300);
        $('html, body').toggleClass('overflow');
    });
    
    $(document).keyup(function(e) {
        if (e.key === "Escape" || e.keyCode === 27) {
            // menu.hide(300);
            menu.removeClass('open');
            burger.removeClass('burger--close');
            $('html, body').removeClass('overflow');
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

});