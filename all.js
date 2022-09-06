$(document).ready(function(){
    $(".showMenu").on('click',function(e){
      e.preventDefault();
      $('body').toggleClass('menu-show');
    });
    $(".top a").click(function (event) {
      event.preventDefault();
      $("html,body").animate(
        {
          scrollTop: 0
        },
        1000
      );
    });
  });