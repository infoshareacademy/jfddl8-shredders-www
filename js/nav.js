const nav = $(".nav");
$(window).resize(function() {
  if ($(window).width() < 785) {
    nav.hide();
  } else {
    nav.show();
  }
});

$(".sm-nav").click(function() {
  nav.slideDown();
});

$(".nav__sm-close").click(function() {
  nav.slideUp();
});

$(".nav__link").click(function() {
  nav.hide();
});
