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
    if (max <= min) a.hide();
    else a.on("click", function(event) {
        let h = b.height();
        b.height(h < max ? max : min);
        $(this).text(h < max ? "Свернуть" : "Развернуть");
        return false
    })
});

$('.tab').on('click', function(){

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

});
