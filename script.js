(function($) {

  "use strict";

  var fullHeight = function() {
    $('.js-fullheight').css('height', $(window).height());
    $(window).resize(function(){
      $('.js-fullheight').css('height', $(window).height());
    });
  };
  fullHeight();

  var scrollax = function() {
    $.Scrollax();
  };
  scrollax();

  var burgerMenu = function() {
    $('body').on('click', '.js-fh5co-nav-toggle', function(event){
      event.preventDefault();
      if ($('#ftco-nav').is(':visible')) {
        $(this).removeClass('active');
      } else {
        $(this).addClass('active');
      }
    });
  };
  burgerMenu();

  var onePageClick = function() {
    $(document).on('click', '#ftco-nav a[href^="#"]', function (event) {
      event.preventDefault();

      var href = $.attr(this, 'href');

      $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top - 70
      }, 500, function() {
        window.location.hash = href;
      });
    });
  };
  onePageClick();

  var contentWayPoint = function() {
    var i = 0;
    $('.ftco-animate').waypoint( function(direction) {

      if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

        i++;

        $(this.element).addClass('item-animate');
        setTimeout(function(){

          $('body .ftco-animate.item-animate').each(function(k){
            var el = $(this);
            setTimeout( function () {
              var effect = el.data('animate-effect');
              if ( effect === 'fadeIn') {
                el.addClass('fadeIn ftco-animated');
              } else if ( effect === 'fadeInLeft') {
                el.addClass('fadeInLeft ftco-animated');
              } else if ( effect === 'fadeInRight') {
                el.addClass('fadeInRight ftco-animated');
              } else {
                el.addClass('fadeInUp ftco-animated');
              }
              el.removeClass('item-animate');
            },  k * 50, 'easeInOutExpo' );
          });

        }, 100);

      }

    } , { offset: '95%' } );
  };
  contentWayPoint();

})(jQuery);
