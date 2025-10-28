$(function() {

    //= components/banner.js
    //= components/burger.js
    //= components/tabs.js
    //= components/slider.js
    //= components/read-more.js
    //= components/popup.js

    document.addEventListener( 'wpcf7mailsent', function( event ) {
        // if(event.detail.contactFormId=="224"){
        // onclick=yaCounter26043108.reachGoal('formsend'); return true;
        // }

        $(".form form").hide();
        $(".form .form__thank").show();

    }, false );

});
