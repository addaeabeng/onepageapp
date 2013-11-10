$(".jumbotron").backstretch("file:///C:/Users/Adwin/Documents/Work/apponepage/source/assets/img/slider-bg.jpg");
//$(".header-iphone").backstretch("file:///C:/Users/Adwin/Documents/Work/apponepage/source/assets/img/iphone-header.png");
$(function() {
    $('a.scrolldown').click(function() {
        SmoothScroll(this);
    });

    $('.footer-nav a').click(function(){
       SmoothScroll(this);
    });

    $('.header-nav a').click(function(){
       SmoothScroll(this);
    });
});

function SmoothScroll(link){
    if (location.pathname.replace(/^\//,'') == link.pathname.replace(/^\//,'') && location.hostname == link.hostname) {
        var target = $(link.hash);
        target = target.length ? target : $('[name=' + link.hash.slice(1) +']');
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }

}