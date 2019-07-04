;(function() {
  const nav = $(".nav")
  const media = window.matchMedia("(max-width: 785px)")
  $(window).resize(function() {
    if (media.matches) {
      nav.hide()
    } else {
      nav.show()
    }
  })

  $(".sm-nav").click(function() {
    nav.slideDown()
  })

  $(".nav__sm-close").click(function() {
    nav.slideUp()
  })

  $(".nav__link").click(function() {
    let navHeight = 60
    if (media.matches) {
      nav.hide()
      navHeight = 0
    }
    let scrollTo = $(this)
      .attr("class")
      .split(" ")[0]
    $("html, body").animate(
      { scrollTop: $(`#${scrollTo}`).offset().top - navHeight },
      "slow"
    )
  })

  const currentNav = [
    $(".scroll-to-top"),
    $(".scroll-to-feature"),
    $(".scroll-to-product-info"),
    $(".scroll-to-team"),
    $(".scroll-to-contact")
  ]

  const remClass = function() {
    $(".nav__link").removeClass("current-nav")
  }

  $(window).scroll(function() {
    let navHeight = 150
    if (media.matches) {
      nav.hide()
      navHeight = 100
    }

    const scrollPosition = $(window).scrollTop()
    const sectionPos = [
      0,
      $("#scroll-to-feature").offset().top,
      $("#scroll-to-product-info").offset().top,
      $("#scroll-to-team").offset().top,
      $("#scroll-to-contact").offset().top
    ]

    for (let i = sectionPos.length - 1; i >= 0; i--) {
      if (scrollPosition >= sectionPos[i] - navHeight) {
        remClass()
        currentNav[i].addClass("current-nav")
        break
      }
    }
  })
})()
