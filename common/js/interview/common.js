


//テキストフェードイン
(function($){
  $(function() {
    $('.animate').scrollInTurn({
      selector: '.target',
      delaySpeed: 600,
      fadeInSpeed: 400,
      fadeOutSpeed: 400,
      easing: 'linear',
      delayHeight: 140,
      fadeOutEvent: false
    });
  });
})(jQuery);


//ムービーエリアのフルスクリーン設定
$(document).ready(function () {
  hsize = $(window).height();
  $("#cover").css("height", hsize + "px");
});
$(window).resize(function () {
  hsize = $(window).height();
  $("#cover").css("height", hsize + "px");
});

$(function(){


  window.isPc = false;
  window.isSp = false;
  window.isTablet = false;
  if((navigator.userAgent.indexOf('Android') > 0 && navigator.userAgent.indexOf('Mobile')== -1) || navigator.userAgent.indexOf('iPad') > 0){
    window.isTablet = true;
  } else if((navigator.userAgent.indexOf('iPhone') > 0 && navigator.userAgent.indexOf('iPad')== -1) || navigator.userAgent.indexOf('iPod') > 0 || (navigator.userAgent.indexOf('Android') > 0 && navigator.userAgent.indexOf('Mobile') > 0)){
    window.isSp = true;
  } else {
    window.isPc = true;
  }

  if(window.isSp){
    $( "body").addClass("isSp")
    window.isSp = true;
  }

  if(window.isTablet){
    $( "body").addClass("isTablet")
    window.isTablet = true;
  }

  //-------------------------------------------------------------------
  // 共通設定
  //-------------------------------------------------------------------

  var $window = $(window);
  var $html_body = $("html, body");
  var $footer = $("footer")
  var $pagetop = $("#pageTop")

  $window.on("load", onLoad);



  //-------------------------------------------------------------------
  // オンロード
  //-------------------------------------------------------------------
  function onLoad(e){

    //fade - menu
    function onOverFade()
    {
      $(this)
        .stop()
        .animate({opacity:0.5}, 400)
    }
    function onOutFade()
    {
      $(this)
        .stop()
        .animate({opacity:1}, 400)
    }
    $(".fade")
      .hover(onOverFade, onOutFade)

    //fade
    function onOverFade02()
    {
      $(this)
        .stop()
        .animate({opacity:0.75}, 400)
    }
    function onOutFade02()
    {
      $(this)
        .stop()
        .animate({opacity:1}, 400)
    }
    $(".fade02")
      .hover(onOverFade02, onOutFade02)


    $( "body")
      .delay(100)
      .animate({opacity: 1}, 600, "swing")


    //リサイズ処理
    $window.on("resize", onResize);
    onResize();

    //スクロール処理
    $window.on("scroll", onScroll);

    onScroll();
  }


  //-------------------------------------------------------------------
  // onScrollEnd
  //-------------------------------------------------------------------
  function onScrollEnd()
  {
  }

  //-------------------------------------------------------------------
  // onScroll
  //-------------------------------------------------------------------
  function onScroll(e)
  {
    var window_h = $window.height()
    var now_scroll_y = $window.scrollTop()
    var content_h = $html_body.height()
    var footer_h = 54
    var def_page_top_bottom = 25

    if(now_scroll_y >= window_h)
    {
      $pagetop
        .stop()
        .animate({opacity: 1}, 400)
    }else{

      $pagetop
        .stop()
        .animate({opacity: 0}, 400)
    }

    var tmp_page_top_bottom =  (now_scroll_y + window_h) - content_h + footer_h + def_page_top_bottom;
    if( tmp_page_top_bottom < def_page_top_bottom )
    {
      tmp_page_top_bottom = def_page_top_bottom;
    }
    $pagetop.css("bottom", tmp_page_top_bottom + "px")

  }

  //-------------------------------------------------------------------
  // onResize
  //-------------------------------------------------------------------
  function onResize(e)
  {
  }

  //-------------------------------------------------------------------
  // ViewPort
  //-------------------------------------------------------------------
  var ua = navigator.userAgent;
  if (ua.indexOf('iPhone') > 0 || ua.indexOf('iPod') > 0 || ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0) {
    $("meta[name='viewport']").attr('content', 'width=device-width,initial-scale=1.0');
  } else if (ua.indexOf('iPad') > 0 || ua.indexOf('Android') > 0) {
    $("meta[name='viewport']").attr('content', 'target-densitydpi=device-dpi, width=1080px, maximum-scale=1.0, user-scalable=yes.0');
  } else {
    $("meta[name='viewport']").attr('content', 'width=device-width,initial-scale=1.0');
  }
});
