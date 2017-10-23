var main = function() {

  $('.noah ul').hover(function(){
    $('.background .contact').show();
    $('.contact').show();
    $('.songs').hide();
    }, function(){
      $('.background .contact').hide();
      $('.contact').hide();
      $('.songs').show(1);
  });

  $('.klein ul').hover(function(){
    $('.contact').show(0);
    $('.songs').hide();
    $('.background .contact').show(0);
    }, function(){
      $('.contact').hide();
      $('.songs').show(1);
      $('.background .contact').hide();

  });

}
/* jQuery: run the main function once the web page has fully loaded.*/
$(document).ready(main);
