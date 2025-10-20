const burger = $('.burger');
const menu = $('.header__nav');
// const menuInner = $('.header__menu-wrapper');
// const header = $('.header');

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

// close menu outside menu

document.addEventListener("click", function(e) {
    const burgerJs = document.querySelector('.burger');
    const menuInnerJs = document.querySelector('.header__menu-wrapper');

    if (menu.hasClass('open') && !burgerJs.contains(e.target) && !menuInnerJs.contains(e.target)){
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

