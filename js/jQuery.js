jQuery(document).ready(function($){
  $('.mobile-menu-btn').click(function(){
    if ($('.nav-a').css('marginTop')=='-400px'){
        $('.nav-a').animate({ marginTop: '0px'}, 'slow');
        $('.fa-times').show();
        $('.fa-bars').hide();
      }
      else {
        $('.nav-a').animate({ marginTop: '-400px'}, 'slow');
        $('.fa-times').hide();
        $('.fa-bars').show();
      }
  });
});
