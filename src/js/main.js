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

  $(document).ready(function(){
    
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
      $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });
    
    function toggleSlide(item) {
      $(item).each(function(i) {
        $(this).on('click', function(e) {
          e.preventDefault();
          $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
          $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active')
        })
      })
    }
    toggleSlide('.catalog-item__back');
    toggleSlide('.catalog-item__link');

    // Modal

    $('[data-modal=consultation]').on('click', function() {
      $('.overlay, #consultation').fadeIn('slow');
    });
    $('.modal__close').on('click', function() {
      $('.overlay, #consultation, #thanks, #order').fadeOut('slow')
    });

    $('.button_mini').each(function(i) {
      $(this).on('click', function() {
        $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
        $('.overlay, #order').fadeIn('slow');
      });
    });

    function validateForms(form){
      $(form).validate({
        rules: {
          name: {
            required: true,
            minlenght: 2
          },
          phone: 'required',
          email: {
            required: true,
            email: true
          },
          messages: {
            name:{
              required: "Пожалуйста введите своё имя",
              minlenght: jQuery.validator.format('Введите {0} символа!')
            },
            phone: 'Пожалуйста введите свой номер телефона',
            email: {
              required: "Пожалуйста введите свой адрес почты ",
              email: "Ваш адрес почты должен быть формата name@domain.ru"
            }
          }
        }
      });
    };
    validateForms('#consultation-form');
    validateForms('#consultation form');
    validateForms('#order form');

    $('input[name=phone]').mask("+7 (999) 999-99-99");
  });

