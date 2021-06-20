$(document).ready(function(){


  if ( $(window).width() <= 960) {
    $("#menu_button").click(function(){
      $(".dropdown-content").slideToggle(250);
    });
  }


});
