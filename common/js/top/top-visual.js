(function($){
  $('.header').on('load',topVisual());

})(jQuery);

function topVisual() {
  var nowDate = new Date();
  var hour2Date = new Date();;
  hour2Date.setHours(nowDate.getHours() - 2)
  if(localStorage.getItem("topVisual") == null || Date.parse(localStorage.getItem("topVisual")) < Date.parse(hour2Date)){
    var headerHSize = $('.header').outerHeight();
    var bodyHSize = $('body').outerHeight();
    var windowHSize = $(window).outerHeight();
    $('.js-topvisual').height(bodyHSize );
    $('.mod-top-hero .image').height(windowHSize - headerHSize);
    $('.mod-top-hero .image').fadeIn(2000);
    setTimeout(function(){
      $('.js-topvisual').fadeOut(2000);
    }, 3000);
    localStorage.setItem("topVisual",nowDate);
  }else{
    $('.js-topvisual').hide();
  }
}
