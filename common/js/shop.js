(function() {
  $(document).on('change', '#select_pref, .select_brands', function() {
    return $('#shop_search').submit();
  });

  $(document).on('change', '#search_pref', function() {
    return window.location.replace('/shop/search?pref=' + this.value);
  });

}).call(this);
