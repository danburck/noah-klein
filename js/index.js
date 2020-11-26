var main = function() {


  /* Navigation scroll change background*/
  $(function() {
      var header = $("body .nav .container");

      $(window).scroll(function() {
          var scroll = $(window).scrollTop();
          if (scroll >= 200) {
              header.addClass("navscrolled");
          } else {
              header.removeClass("navscrolled");
          }
      });
  });


  /* Navigation links */

  $('header .nav .container .songwritingandproductionnav').click(function() {
      $('html,body').animate({
          scrollTop: $('.ankerSongwritingAndProduction').offset().top -120},
          'slow');
  });


  $('header .nav .container .mixingnav').click(function() {
      $('html,body').animate({
          scrollTop: $('.ankerMixing').offset().top -120 },
          'slow');
  });


  $('header .nav .container .noahkleinnav').click(function() {
      $('html,body').animate({
          scrollTop: $('.ankerNoahKlein').offset().top},
          'slow');
  });


  $('header .nav .container .merchnav').click(function() {
      $('html,body').animate({
          scrollTop: $('.ankerMerch').offset().top -120},
          'slow');
  });


  $('header .nav .container .workwithmehnav').click(function() {
      $('html,body').animate({
          scrollTop: $('.ankerWorkWithMe').offset().top},
          'slow');
  });


  $('.landingpage .ankerNoahKlein .learnMore').click(function() {
      $('html,body').animate({
          scrollTop: $('.ankerWorkWithMe').offset().top},
          'slow');
  });


}
/* jQuery: run the main function once the web page has fully loaded.*/
$(document).ready(main);
