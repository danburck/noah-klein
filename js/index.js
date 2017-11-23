var main = function() {

  $('.songs .twentytwo a').hover(function(){
    $('.background .twentytwo').fadeTo( 220, 1.0 );
    $('.background .twentytwo').show(0);
    }, function(){
    $('.background .twentytwo').fadeTo( 220, 0 );
    $('.background .twentytwo').hide(0);
    });

  $('.songs .radiantlights a').hover(function(){
    $('.background .radiantlights').fadeTo( 250, 1.0 );
    $('.background .radiantlights').show(0);
    }, function(){
    $('.background .radiantlights').fadeTo( 250, 0 );
    $('.background .radiantlights').hide(0);
    });


  $('.songs .shadow a').hover(function(){
    $('.background .shadow').fadeTo( 150, 1.0 );
    $('.background .shadow').show(0);
    }, function(){
    $('.background .shadow').fadeTo( 150, 0 );
    $('.background .shadow').hide(0);
  });

  $('.songs .cold a').hover(function(){
    $('.background .cold').fadeTo( 150, 1.0 );
    $('.background .cold').show(0);
    }, function(){
    $('.background .cold').fadeTo( 150, 0 );
    $('.background .cold').hide(0);
  });

  $('.songs .boy a').hover(function(){
    $('.background .boy').fadeTo( 150, 1.0 );
    $('.background .boy').show(0);
    }, function(){
    $('.background .boy').fadeTo( 150, 0 );
    $('.background .boy').hide(0);
  });

  $('.songs .inseason a').hover(function(){
    $('.background .inseason').fadeTo( 150, 1.0 );
    $('.background .inseason').show(0);
    }, function(){
    $('.background .inseason').fadeTo( 150, 0 );
    $('.background .inseason').hide(0);
  });

  $('.noah ul').hover(function(){
    $('.background .contact').fadeTo( 150, 1.0 );
    $('.background .contact').show(0);
    $('.contact').fadeTo( 150, 1.0 );
    $('.contact').show(0);
    $('.back').fadeTo( 150, 1.0 );
    $('.back').show(0);
    $('.songs').hide(0);
    });

  $('.klein ul').hover(function(){
    $('.background .contact').fadeTo( 150, 1.0 );
    $('.background .contact').show(0);
    $('.contact').fadeTo( 150, 1.0 );
    $('.contact').show(0);
    $('.back').fadeTo( 150, 1.0 );
    $('.back').show(0);
    $('.songs').hide(0);
    });

    $('.back p').click(function(){
      $('.background .contact').fadeTo( 150, 0.0 );
      $('.background .contact').hide(0);
      $('.contact').fadeTo( 150, 0.0 );
      $('.contact').hide(0);
      $('.back').fadeTo( 150, 0.0 );
      $('.back').hide(0);
      $('.songs').fadeTo( 150, 1.0 );
      $('.songs').show(0);
      });



}
/* jQuery: run the main function once the web page has fully loaded.*/
$(document).ready(main);
