(function() {
  $(window).on('load', function() {
    $('.js-button-search').click();
  });

  $(document).on('change', '.js-checkbox-search', function(e) {
    e.preventDefault();
    $('#js-list-product').empty();
    return $('.js-button-search').click();
  });

  $(document).on('click', '.js-form-reset', function(e) {
    e.preventDefault();
    $('form')[0].reset();
    $('#js-list-product').empty();
    return $('.js-button-search').click();
  });

}).call(this);
