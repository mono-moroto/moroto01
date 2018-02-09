// map js
if($('.js-map').length){
  var icon_no = '/img/shop/ico_pin_01_sp.png';
  var icon_on = '/img/shop/ico_pin_01_on.png';
  var icon_scale = new google.maps.Size(25, 31);
  var gmarkers = [];

  if ($(window).width() > 768) {
    var icon_no = '/img/shop/ico_pin_01.png';
    var icon_scale = new google.maps.Size(51, 61);
  }
  function attachMessage(marker, i) {
    // Marker をクリックした時のイベントを定義
    var contentString =
    '<div class="box-pin">'+
      '<div class="body">'+
        '<figure class="thumb"><img src="'+data[i].thumb+'"></figure>'+
        '<h2 class="title">'+data[i].title+'</h2>'+
        '<p class="text">'+data[i].address+'</p>'+
        '<p class="text">'+data[i].tel+'</p>'+
        '<p class="text">'+data[i].area+'</p>'+
        '<p class="text">'+data[i].product+'</p>'+
        '<p class="text">新着情報：<em>'+data[i].information+'</em></p>'+
        '<p class="text">'+data[i].read+'</p>'+
      '</div>'+
    '</div>';
    var infowin = new google.maps.InfoWindow({
      content: contentString
    });


    // mouseoverイベントを取得するListenerを追加
    google.maps.event.addListener(marker, 'mouseover', function(){
      infowin.open(map, marker);
      $('.gm-style-iw').parent().children(':not(.gm-style-iw)').hide();
    });

    // mouseoutイベントを取得するListenerを追加
    google.maps.event.addListener(marker, 'mouseout', function(){
      infowin.close();
    });

    // // clickイベントを取得するListenerを追加
    // google.maps.event.addListener(marker, "click", function(){
    //   if (infowin) {
    //     infowin.close();
    //   }
    //   infowin.open(map, marker);
    //   $('.gm-style-iw').parent().children(':not(.gm-style-iw)').hide();
    // });

  }

  if($('.js-map').length > 1){
    // 位置情報と表示データの組み合わせ
    var data = new Array();
    $.each(prefMarkers, function( key, val ){
      var latlng = val.location.split(",");
      data.push({
        position: new google.maps.LatLng(latlng[0], latlng[1]),
        title: val.title,
        thumb: val.thumb,
        address: val.address,
        tel: val.tel,
        area: val.area,
        product: val.product,
        information: val.information,
        read: val.read,
        newFlag: val.newFlag
      });
      var map = new google.maps.Map(document.getElementById('map'), {
        scrollwheel: false
      });
      var bounds = new google.maps.LatLngBounds();

      for (i = 0; i < data.length; i++) {
        var markerIcon = "";
        if(data[i].newFlag == 'true' ){
          markerIcon = icon_on;
        }else{
          markerIcon = icon_no;
        }
        marker = new google.maps.Marker({
          position: data[i].position,
          map: map,
          icon:{
            url:markerIcon
          }
        });
        bounds.extend (marker.position);
        attachMessage(marker, i);
        gmarkers[i] = marker;
      }

      map.fitBounds (bounds);

    });
  } else {
    $.each(prefMarkers, function( key, val ){
      var latlngsa = val.location.split(",");
      function initialize() {
        var latlng = new google.maps.LatLng(latlngsa[0], latlngsa[1]);
        var opts = {
        zoom: 17,
        center: latlng,
        scrollwheel: false,
        mapTypeControl: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP
       };
     /* 表示エリアのID名を指定。この場合id="map"のところに出力されます */
     var map = new google.maps.Map(document.getElementById("map"), opts);

     /* 地図style */
     var styleOptions = [{

     'stylers': [{
     'gamma': 0.8
     }, {
     'saturation': -100
     }, {
     'lightness': 20
     }]
     }]

     //地図の切り替えボタン
     var styledMapOptions = {
     name: 'モノクロ地図'
     }
     var monoType = new google.maps.StyledMapType(styleOptions, styledMapOptions);
     map.mapTypes.set('mono', monoType);
     map.setMapTypeId('mono');
     marker = new google.maps.Marker({
       position: latlng,
       map: map,
       icon:{
         url:icon_no,
         scaledSize : icon_scale
       }
     });
    }
    google.maps.event.addDomListener(window, 'load', initialize);
  });
  }

  function map_click(i) {
    for(var j = 0; gmarkers.length > j; j++){
      google.maps.event.trigger(gmarkers[j], "mouseout");
    }
    google.maps.event.trigger(gmarkers[i], "mouseover");
  }
}
