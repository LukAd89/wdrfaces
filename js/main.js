(function ($) {
  $('#nav-link-tables').click(function () {
    $('#page-content').load("sections/trainees.html");
  });
  $('#nav-link-charts').click(function () {
    $('#page-content').load("sections/blank.html");
  });

  $('.nav-link:not([id])').click(function () {
    $('#page-content').load("sections/blank.html");
  });

})(jQuery);