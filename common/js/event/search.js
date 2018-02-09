(function() {
  $(window).on('load', function() {
    var $form, $title;
    $title = $('.js-toggle-btn');
    $form = $('.js-toggle-btn').next();
    if (location.search !== "") {
      $form.addClass('is-active');
      return $title.text('- 条件を指定して検索');
    }
  });

  $(document).on('click', '.js-link-search', function() {
    $('#js-list-event').empty();
    $('.js-button-search').click();
  });

  $('.js-toggle-btn').click(function() {
    var $form;
    $form = $(this).next();
    $form.toggleClass('is-active');
    if ($form.hasClass('is-active')) {
      $(this).text('- 条件を指定して検索');
    } else {
      $(this).text('+ 条件を変えて検索');
    }
  });

}).call(this);
