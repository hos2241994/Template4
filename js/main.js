/*Global Variable*/
const videoSrc = document.getElementById('player-1').src;
let open = document.getElementsByClassName(' video-play-btn');
let videoBox  = document.getElementsByClassName('video-popup');
let close = document.getElementsByClassName('video-popup-close');
let nav = document.getElementsByClassName('navbar');
let theme = document.getElementById('theme');

/*Open and Close The video*/
function toggleAction(action){
    if(action === 'open'){
        videoBox[0].classList.add('open');
    }else{
        videoBox[0].classList.remove('open');
    }
}

//Add class shrink to Nav Bar
function scrolling () {
    if(document.body.scrollTop  > 90 || document.documentElement.scrollTop > 90){
        nav[0].classList.add('navbar-shrink','shadow-lg');
    }else {
        nav[0].classList.remove('navbar-shrink','shadow-lg');
    }
}

//Event Happens when click on video buttons
    open[0].addEventListener('click', () => {
        toggleAction('open')
    });
    close[0].addEventListener('click',  () => {
        toggleAction('close')
    });

//Event happen when scrolling
window.addEventListener('scroll', scrolling); 


$(function(){
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
});




//Close the nav bar after clicking on any nav-item
document.querySelectorAll('.nav-item').forEach(el => {
    el.addEventListener('click', ()=> {
        document.querySelector('.navbar-collapse').classList.remove('show')
    })
});

//Toggle Theme
function changeTheme () {
    if(!document.body.classList.contains('dark')){
        document.body.classList.add('dark');
        theme.classList.remove('fa-moon')
        theme.classList.add('fa-sun')
    }else{
        document.body.classList.remove('dark');
        theme.classList.remove('fa-sun')
        theme.classList.add('fa-moon')
    }
}

document.body.getElementsByClassName('toggle-theme')[0].addEventListener('click', changeTheme);
