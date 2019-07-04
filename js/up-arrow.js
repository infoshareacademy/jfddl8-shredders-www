(function() {
  const upArrow = $(".up-arrow");
  $(window).scroll(function() {
    upArrow.show();
    if ($(window).scrollTop() == 0) upArrow.hide();
  });
  upArrow.click(function(){
    $("html, body").animate({ scrollTop: 0 }, "slow");
   })
})();
