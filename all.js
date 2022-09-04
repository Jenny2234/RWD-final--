$(document).ready(function(){
    $(".showmenu").on('click',function(e){
      e.preventDefault();
      $('body').toggleClass('menu-show');
    });
    $(".scrollTop").click(function (event) {
      event.preventDefault();
      var target = $(this).attr("href");
      var targetPosition = $(target).offset().top;
      $("html,body").animate({ scrollTop: targetPosition }, 1000);
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