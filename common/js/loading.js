$(function() {
  var more = $('.js-mod-more');
  var loading = $('.js-mod-load');
  $(document).on('ajaxSend', function(event, xhr, settings) {
    $('input, textarea, select, button, a').prop('disabled', true)
    // 共通フッターのメルマガ会員登録以外はローディング画像を表示する
    if (settings.url != "/mail_members") {
      more.hide();
      loading.show();
    }
    return
  }).on('ajaxComplete', function(event, xhr, settings) {
    $('input, textarea, select, button, a').prop('disabled', false)
    // 共通フッターのメルマガ会員登録以外はローディング画像を表示する
    if (settings.url != "/mail_members") {
      loading.hide();
      more.show();
    }
    return
  });
});
