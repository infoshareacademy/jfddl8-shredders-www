(function() {
  const nav = $(".nav");
  const media = window.matchMedia("(max-width: 785px)");
  $(window).resize(function() {
    if (media.matches) {
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
    let navHeight = 60;
    if (media.matches) {
      nav.hide();
      navHeight = 0;
    }
    let scrollTo = $(this).attr('class').split(" ")[0]
    $("html, body").animate({ scrollTop: $(scrollTo).offset().top-navHeight }, "slow");
  });

  $(window).scroll(function() {
    const remClass = function(){
      $(".nav__link").removeClass('current-nav')
    }
    if ($(window).scrollTop() === $('#scroll-to-team').offset().top){
      remClass();
      $('.#scroll-to-team').addClass('current-nav')
    }

    if ($(window).scrollTop() === $('#scroll-to-product-info').offset().top){
      remClass();
      $('.#scroll-to-product-info').addClass('current-nav')
    }
    // console.log($(window).scrollTop())
    // console.log($('#scroll-to-product-info').offset().top)
  });


})();
