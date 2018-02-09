(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _slide = require('./module/_slide.js');

var _slide2 = _interopRequireDefault(_slide);

var _scroll = require('./module/_scroll.js');

var _scroll2 = _interopRequireDefault(_scroll);

var _accordion = require('./module/_accordion.js');

var _accordion2 = _interopRequireDefault(_accordion);

var _pulldown = require('./module/_pulldown.js');

var _pulldown2 = _interopRequireDefault(_pulldown);

var _navi = require('./module/_navi.js');

var _navi2 = _interopRequireDefault(_navi);

var _parallax = require('./module/_parallax.js');

var _parallax2 = _interopRequireDefault(_parallax);

var _utility = require('./module/_utility.js');

var _utility2 = _interopRequireDefault(_utility);

var _mouseOver = require('./module/_mouseOver.js');

var _mouseOver2 = _interopRequireDefault(_mouseOver);

var _viewPortChange = require('./module/_viewPortChange.js');

var _viewPortChange2 = _interopRequireDefault(_viewPortChange);

var _snsfollowing = require('./module/_snsfollowing.js');

var _snsfollowing2 = _interopRequireDefault(_snsfollowing);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// common js
(function ($) {
  // navi f modulerom navi.js
  (0, _navi2.default)();

  // scroll module from scroll.js
  (0, _scroll2.default)();

  // accordion module from accordion.js
  (0, _accordion2.default)();

  // pulldown module from pulldown.js
  (0, _pulldown2.default)();

  // parallax module from parallax.js
  (0, _parallax2.default)();

  // utility from utility.js
  (0, _utility2.default)();

  // slide module from slide.js
  (0, _slide2.default)();

  (0, _mouseOver2.default)();

  (0, _viewPortChange2.default)();

  (0, _snsfollowing2.default)();
})(jQuery);

},{"./module/_accordion.js":2,"./module/_mouseOver.js":3,"./module/_navi.js":4,"./module/_parallax.js":5,"./module/_pulldown.js":6,"./module/_scroll.js":7,"./module/_slide.js":8,"./module/_snsfollowing.js":9,"./module/_utility.js":10,"./module/_viewPortChange.js":11}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

// アコーディオン
exports.default = function () {
  var accordion = $('.js-accordion');
  var speed = 400; // スピード
  accordion.parent().next().hide();
  accordion.click(function () {
    var target = $(this).parent().next();
    $(this).toggleClass('is-active');
    target.stop().slideToggle(speed);
    return false;
  });
};

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

// 画像マウスオーバー
exports.default = function () {
  $('a.js-mouseover img').hover(function () {
    $(this).attr('src', $(this).attr('src').replace('_off', '_on'));
  }, function () {
    if (!$(this).hasClass('currentPage')) {
      $(this).attr('src', $(this).attr('src').replace('_on', '_off'));
    }
  });
};

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  // spNavi
  if ($(window).width() < 769) {
    $('.js-gnav-btn').on('click', function (e) {
      $(this).toggleClass('is-active');
      $(this).parent().next('.nav-global').toggleClass('is-active');
      e.preventDefault();
    });
    $('.js-gnav-acc').on('click', function (e) {
      $(this).toggleClass('is-active');
      $(this).next('.list-nav-global-low-01').slideToggle(400);
      e.preventDefault();
    });
  }

  //pcNavi
  if ($(window).width() > 768) {
    var header = $('.header').outerHeight();
    var innerList = $('.js-gnav-acc');
    var navGlobal = $('.nav-global');
    $(window).on("scroll load", function () {
      if ($(window).scrollTop() >= header) {
        $('.header').addClass('is-fixed');
        $('.hero-parallax').addClass('is-fixed');
      } else {
        $('.header').removeClass('is-fixed');
        $('.hero-parallax').removeClass('is-fixed');
      }
    });

    $('.item-nav-global > a').mouseenter(function () {
      if ($(this).hasClass('js-gnav-acc')) {
        $(this).addClass('is-active');
        $(this).parent().addClass('is-active');
        $(this).next('.list-nav-global-low-01').fadeIn(300);
      } else {
        innerList.removeClass('is-active');
        innerList.parent().removeClass('is-active');
        innerList.next('.list-nav-global-low-01').fadeOut(300);
      }
    });

    navGlobal.mouseleave(function () {
      innerList.removeClass('is-active');
      innerList.parent().removeClass('is-active');
      innerList.next('.list-nav-global-low-01').fadeOut(300);
    });
  }
};

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

//parallax image
exports.default = function () {
  var mq = window.matchMedia("(min-width: 768px)").matches;
  var parallaxImage = $('.hero-parallax');
  var california = $('#parallax-california');
  var californiaBeach = $('#parallax-california-beach');
  var californiaCity = $('#parallax-california-city');
  var californiaBrown = $('#parallax-california-brown');
  var californiaGreen = $('#parallax-california-green');
  var am6 = $('#parallax-am6');

  if (mq) {
    if (parallaxImage.length > 0) {
      california.parallax({
        imageSrc: '/img/brand/california/img_california_top_01.jpg',
        position: 'center bottom'
      });
      californiaBeach.parallax({
        imageSrc: '/img/product/beach/img_beach_hero_01_pc.jpg',
        position: 'center center'
      });
      californiaCity.parallax({
        imageSrc: '/img/product/city/img_city_hero_01_pc.jpg',
        position: 'center center'
      });

      californiaBrown.parallax({
        imageSrc: '/img/product/brown/img_brown_hero_01_pc.jpg',
        position: 'center center'
      });

      californiaGreen.parallax({
        imageSrc: '/img/product/green/img_green_hero_01_pc.jpg',
        position: 'center center'
      });

      am6.parallax({
        imageSrc: '/img/brand/am6/img_am6_hero_01_pc.jpg',
        position: 'center center'
      });
    }
  }
};

},{}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

// アコーディオン
exports.default = function () {
  var pulldown = $('.js-pulldown');
  pulldown.click(function () {
    $(this).next().toggleClass('is-active');
    return false;
  });
};

},{}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

// スムーススクロール
exports.default = function () {
  var scroll = $('.js-scroll');
  scroll.click(function () {
    var speed = 400; // スクロールスピード
    var href = $(this).attr("href");
    var target = $(href === "#" || href === "" ? 'html' : href);
    if ($('.header').length) {
      var naviHeight = $('.header').height();
      var naviHeight = naviHeight + 20;
    } else {
      var naviHeight = 0;
    }
    var position = target.offset().top - naviHeight;
    if (href === '#') {
      // リンク#のときはページの先頭へ
      $('body,html').animate({ scrollTop: 0 }, speed, 'swing');
    } else {
      // それ以外は指定idへ
      $('body,html').animate({ scrollTop: position }, speed, 'swing');
    }
    return false;
  });
};

},{}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var slider = $('.js-slider');
  var sliderDefault = $('.js-slider-default');
  var sliderGrid = $('.js-slider-grid');
  var sliderInformation = $('.js-slider-information');
  var sliderProperty = $('.js-slider-property');
  var sliderTopMagazine = $('.magazine-slide');
  var sliderShop = $('.js-slider-shop');
  var sliderPc = $('.js-slider-pc');
  slider.slick({
    arrows: true,
    autoplay: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    responsive: [{
      breakpoint: 768,
      settings: {
        centerMode: true
      }
    }]
  });

  sliderInformation.slick({
    arrows: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        centerMode: true
      }
    }]
  });

  sliderDefault.slick({
    arrows: true,
    infinite: true,
    autoplay: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 768
    }]
  });
  sliderProperty.slick({
    arrows: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 768
    }]
  });

  sliderGrid.slick({
    arrows: true,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 768,
      settings: {
        arrows: false
      }
    }]
  });

  sliderTopMagazine.slick({
    arrows: true,
    autoplay: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    centerMode: true,
    responsive: [{
      breakpoint: 768,
      settings: {
        centerMode: false,
        variableWidth: false
      }
    }]
  });

  sliderShop.slick({
    arrows: true,
    autoplay: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    centerMode: true,
    responsive: [{
      breakpoint: 768,
      settings: {
        variableWidth: false
      }
    }]
  });

  sliderPc.slick({
    arrows: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [{
      breakpoint: 768,
      settings: "unslick"
    }]
  });
};

},{}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

// 追従
exports.default = function () {
  if ($('.js-sns-following').length > 0) {
    var $snsFollowing = $('.js-sns-following');
    var snsFollowingTop = $snsFollowing.offset().top - 48;
    $(window).scroll(function () {
      var ScrTop = $(document).scrollTop();
      if (ScrTop >= snsFollowingTop) {
        $snsFollowing.addClass('is-active');
      } else {
        $snsFollowing.removeClass('is-active');
      }
    });
  }
};

},{}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  //SNS
  var get_instragram = function get_instragram(num, imgElm, linkElm) {
    var token = "1681798142.f3f990a.5d34da6c606241b9b31ce1451f044009";
    var user_id = "1681798142";
    var url = 'https://api.instagram.com/v1/users/' + user_id + '/media/recent?access_token=' + token + '&count=' + num;
    var elm = imgElm;
    var a = linkElm;
    $.ajax({
      type: "GET",
      dataType: "jsonp",
      url: url,
      success: function success(data) {
        var json = data;
        var photosData = json.data;
        for (var i = 0; i < photosData.length; i++) {
          $(a).eq(i).attr("href", photosData[i].link);
          $(elm).eq(i).attr("src", photosData[i].images.low_resolution.url);
        }
      }
    });
  };

  //removeNewline
  var removeNewline = function removeNewline(selector) {
    $(selector).html($(selector).html().replace(/\t|\n/g, ""));
  };

  (function () {
    // instagram
    get_instragram(6, ".img-instagram", ".link-instagram");
    // facebook
    if ($(window).width() > 768) {
      $(".js-facebook").append($('<iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fresumurenovation%2F%3Fhc_ref%3DPAGES_TIMELINE&tabs=timeline&width=' + "340" + '&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" class="box-facebook"></iframe>'));
    } else {
      $(".js-facebook").append($('<iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fresumurenovation%2F&tabs=like&width=320&height=154&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId" width="320" height="154" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" class="box-facebook"></iframe>'));
    }
    // ForAndroidBrowser
    removeNewline(".list-instagram");
  })();

  //match height
  (function () {
    var matchHeightTitle = $('.mod-information .title');
    var matchHeightAbout = $('.mod-top-about-item .image');
    matchHeightAbout.length > 0 ? matchHeightAbout.matchHeight() : '';
    matchHeightTitle.length > 0 ? matchHeightTitle.matchHeight() : '';
  })();
};

},{}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  /* ----------------------------------------------------------
   TBViewport
  ---------------------------------------------------------- */
  var TBViewport = function TBViewport() {
    var User = navigator.userAgent;
    var TBForIPad = '<meta name="viewport" content="width=1260px,user-scalable=yes">';
    var TBForAndroid = '<meta name="viewport" content="width=1260px,user-scalable=yes">';
    if (User.indexOf('iPhone') > 0 || User.indexOf('iPod') > 0 || User.indexOf('Android') > 0 && User.indexOf('Mobile') > 0) {
      //sp
    } else if (User.indexOf('iPad') > 0) {
      //tab iPad
      $('meta[name="viewport"]').after(TBForIPad).remove();
    } else if (User.indexOf('Android') > 0) {
      //tab Android
      $('meta[name="viewport"]').after(TBForAndroid).remove();
    } else {
      //other
    }
  };
};

},{}]},{},[1]);
