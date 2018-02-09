(function() {
  var HEADER_HEIGHT, toggleTextForm;

  HEADER_HEIGHT = 60;

  $(function() {
    var form, loading;
    form = $('.js-form');
    loading = $('.js-mod-load');
    $(document).on('ajaxSend', function(event, xhr, settings) {
      if (settings.url !== "/mail_members") {
        form.hide();
        loading.show();
      }
    }).on('ajaxComplete', function(event, xhr, settings) {
      if (settings.url !== "/mail_members") {
        loading.hide();
        form.show();
        toggleTextForm($('.js-toggle-checkbox'));
      }
    });
  });

  $(function() {
    return toggleTextForm($('.js-toggle-checkbox'));
  });

  $(function() {
    var position;
    if ($(".js-txt-error").length) {
      position = $(".js-txt-error").parent().parent().offset().top - HEADER_HEIGHT;
      return $('html,body').animate({
        scrollTop: position
      }, 0, 'swing');
    }
  });

  $(document).on('click', '.js-link-confirm', function() {
    var position;
    if ($(".js-scroll-position").length) {
      position = $(".js-scroll-position").offset().top - HEADER_HEIGHT;
      $('html,body').animate({
        scrollTop: position
      }, 0, 'swing');
    }
    $(this).next('.js-button-confirm').click();
  });

  $(document).on('change', '.js-toggle-checkbox', function() {
    return toggleTextForm($(this));
  });

  toggleTextForm = function(elem) {
    elem.each(function(i, el) {
      if ($(el).is(':checked')) {
        return $(el).parent().find('.js-toggle-textarea').prop('disabled', false);
      } else {
        return $(el).parent().find('.js-toggle-textarea').prop('disabled', true);
      }
    });
  };

}).call(this);
