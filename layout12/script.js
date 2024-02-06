
// $('.owl-carousel').owlCarousel({
//     loop:true,
//     margin:10,
//     autoplay:true,
//     autoplayTimeout:true,
//     responsiveClass:true,
//     responsive:{
//         0:{
//             items:1,
//             nav:true
//         },
//         600:{
//             items:3,
//             nav:false
//         },
//         1000:{
//             items:5,
//             nav:true,
//             loop:false
//         }
//     }
// })
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    dots:false,
    autoplay: true,
    animateIn:true,
    slideBy:2,
    autoplayTimeout: 2500,
    smartSpeed:500,
    slideTransition:'linear',
    autoplayHoverPause: false,
    nav: false,

    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 1
        }
    }
})

