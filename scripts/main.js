
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        autoplay:true,
        responsiveClass:true,
        responsive:{
            414:{
                items:1,
                nav:false
            },
            375:{
                items:1,
                nav:false
            },
            320:{
                items:1,
                nav:false
            },
            
        
            700:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:false,
                // navText: ["<img src='images/prev.svg'>", "<img src='images/next.svg'>"],
            }
        }
    })

    $('.menu__btn').on('click', function(event){
        $('.rating__header').toggleClass('opacity');
        $('.rating__desc').toggleClass('opacity');
        $('.rating__table').toggleClass('opacity');
    });
    
});

(function($) {
    $(function() {
      
      $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
        $(this)
          .addClass('active').siblings().removeClass('active')
          .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
      });
      
    });
})(jQuery);