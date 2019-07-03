(function() {
  if (localStorage.getItem("confirmed") == "1") $(".cookie__box").hide();

  $(".cookie__button").click(function() {
    $(".cookie__box").hide();
    localStorage.setItem("confirmed", "1");
  });
})();
