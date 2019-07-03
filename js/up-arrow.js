(function() {
  const upArrow = $(".up-arrow");
  $(window).scroll(function() {
    upArrow.show();
    if ($(window).scrollTop() == 0) upArrow.hide();
  });
})();
