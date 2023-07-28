// $(document).ready(function(){
//     $('.carousel__inner').slick({
//         infinite: true,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         speed: 1200,
//         autoplay: true,
//         autoplaySpeed: 2000,
//         prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></img></button>',
//         nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
//         responsive: [
//             {
//               breakpoint: 768,
//               settings: {
//                 dots: true,
//                 arrows: false
//               }
//             },
//             {
//               breakpoint: 600,
//               settings: {
//                 slidesToShow: 2,
//                 slidesToScroll: 2
//               }
//             },
//             {
//               breakpoint: 480,
//               settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1
//               }
//             }
//             // You can unslick at a given breakpoint now by adding:
//             // settings: "unslick"
//             // instead of a settings object
//           ]
//     });
//   });
const slider = tns({
  container: '.carousel__inner',
  items: 1,
  slideBy: 'page',
  autoplay: false,
  controls: false,
  nav: false,
});

document.querySelector('.prev').addEventListener('click', function () {
  slider.goTo('prev')});

document.querySelector('.next').addEventListener('click', function () {
  slider.goTo('next')});


