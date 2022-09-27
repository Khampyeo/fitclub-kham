$('.home-page__content').slick({
    prevArrow: '.home-page .slide-left',
    nextArrow: '.home-page .slide-right',
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    cssEase: 'linear',
    dots: true
});
$('.pop-courses__list').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '.pop-courses--slide-left',
    nextArrow: '.pop-courses--slide-right',
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 1023,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 539,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
    ],

});
$('.home-page__advertise-list').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '.advertise--slide-left',
    nextArrow: '.advertise--slide-right',
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 1023,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 539,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
    ],
});
// TOP-PAGe BTN
let mybutton = document.getElementById("top-btn");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        mybutton.style.display = "flex";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
var header = document.getElementById('header__navbar');
var mobileMenu = document.getElementById('menu-bar');
var headerHeight = header.clientHeight;

// dong/mo menu
mobileMenu.onclick = function () {
    console.log(headerHeight);
    var isClosed = header.clientHeight === headerHeight;
    
    if (isClosed) {
        setTimeout(() => {
            
            header.style.height = '18rem';
        }, 10);
    }
    else {
        header.style.height = null;
    }
}