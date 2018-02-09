(function() {
  $(document).on('change', '.js-build-prefectures', function() {
    $('#js-shop-list').html('');
    return $.get({
      url: '/documents/cities',
      data: {
        pref_id: $(this).val()
      }
    }).done(function(data) {
      return $('#js-build-cities-select').html(data);
    }).fail(function(data) {
      alert('市町村の取得に失敗しました');
      return console.log(data);
    });
  });

  $(document).on('change', '.js-build-cities', function() {
    return $.get({
      url: '/documents/shops',
      data: {
        city_id: $(this).val()
      }
    }).done(function(data) {
      return $('#js-shop-list').html(data);
    }).fail(function(data) {
      alert('店舗の取得に失敗しました');
      return console.log(data);
    });
  });

}).call(this);
