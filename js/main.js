/*Global Variable*/
const videoSrc = document.getElementById('player-1').src;
let open = document.getElementsByClassName(' video-play-btn');
let videoBox  = document.getElementsByClassName('video-popup');
let close = document.getElementsByClassName('video-popup-close');
let nav = document.getElementsByClassName('navbar');
let theme = document.getElementById('theme');
console.log(theme)


/*Open and Close The video*/
function openClose (){
    if(videoBox[0].classList.contains('open') === true){
        document.getElementById('player-1').src = "";
        videoBox[0].classList.remove('open');
    }else {
        videoBox[0].classList.add('open');
        document.getElementById('player-1').src = videoSrc;
    }
};

//Add class shrink to Nav Bar
function scrolling () {
    if(document.body.scrollTop  > 90 || document.documentElement.scrollTop > 90){
        nav[0].classList.add('navbar-shrink');
    }else {
        nav[0].classList.remove('navbar-shrink');
    }
}

//Event Happens when click on video buttons
    open[0].addEventListener('click', openClose);
    close[0].addEventListener('click', openClose);

//Event happen when scrolling
window.addEventListener('scroll', scrolling); 

//Features Carousel
$('.features-carousal').owlCarousel({
    loop:true,
    margin:10,
    autoplay: false,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        1000:{
            items:3,
        }
    }
});

//Screenshots Carousel
$('.screenshots-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay: false,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        1000:{
            items:4,
        }
    }
});

//Testimonials Carousel
$('.testimonials-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay: false,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        1000:{
            items:3,
        }
    }
});

//Team Carousel
$('.team-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay: false,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        1000:{
            items:3,
        }
    }
});

//Scrollit
$(function(){
    $.scrollIt({
        topOffset: -50
    });
});

//Navbar Collapse
/*$('.nav-link').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});*/
document.querySelectorAll('.nav-item').forEach(el => {
    el.addEventListener('click', ()=> {
        document.querySelector('.navbar-collapse').classList.remove('show')
    })
});

//Toggle Theme
function changeTheme () {
    if(document.body.classList.contains('sun')){
        document.body.classList.remove('sun');
        document.body.classList.add('dark');
        theme.classList.remove('fa-moon')
        theme.classList.add('fa-sun')
    }else{
        document.body.classList.remove('dark');
        document.body.classList.add('sun');
        theme.classList.remove('fa-sun')
        theme.classList.add('fa-moon')
    }
}

document.body.getElementsByClassName('toggle-theme')[0].addEventListener('click', changeTheme);
