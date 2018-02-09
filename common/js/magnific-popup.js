(function() {
  $('.js-am6-youtube').magnificPopup({
    type: 'iframe',
    iframe: {
      markup: '<div class="mfp-iframe-scaler">' + '<div class="mfp-close"></div>' + '<iframe width="560" height="315" src="https://www.youtube.com/embed/tDNmTuLW_C4?rel=0&autoplay=1&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>' + '<div class="mfp-title">Some caption</div>' + '</div>'
    },
    mainClass: 'mfp-fade',
    removalDelay: 150,
    preloader: false,
    fixedContentPos: false
  });

}).call(this);
