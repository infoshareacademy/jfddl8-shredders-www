;(function() {
  const nav = document.querySelector('.nav')
  const media = window.matchMedia('(max-width: 785px)')
  const navLink = document.querySelectorAll('.nav__link')
  const smNav = document.querySelector('.sm-nav')
  const navUl = document.querySelector('.nav ul')

  window.addEventListener('resize', function() {
    if (media.matches) {
      nav.style.height = '200px'
      nav.style.top = '-200px'
    } else {
      nav.style.height = '80px'
      nav.style.display = 'block'
      nav.style.top = '0'
    }
  })
  document.body.addEventListener('click', function(evt) {
    if (evt.target !== smNav && evt.target !== navUl && media.matches)
      nav.style.top = '-200px'
  })

  smNav.addEventListener('click', function() {
    nav.style.top = '0'
  })

  navLink.forEach(function(link) {
    link.addEventListener('click', function(evt) {
      scrollNav(evt)
    })
  })

  const scrollNav = function(evt) {
    let navHeight = 60
    if (media.matches) {
      nav.style.top = '-200'
      navHeight = 0
    }

    let scrollTo = evt.target.className.split(' ')[0]
    const scrollPx =
      document.querySelector('#' + scrollTo).offsetTop - navHeight

    window.scrollTo({
      top: scrollPx,
      left: 0,
      behavior: 'smooth'
    })
  }

  const currentNav = [
    document.querySelector('.scroll-to-top'),
    document.querySelector('.scroll-to-feature'),
    document.querySelector('.scroll-to-product-info'),
    document.querySelector('.scroll-to-team'),
    document.querySelector('.scroll-to-contact')
  ]

  const remClass = function() {
    navLink.forEach(function(link) {
      link.classList.remove('current-nav')
    })
  }

  window.addEventListener('scroll', function() {
    let navHeight = 150
    if (media.matches) {
      nav.style.top = '-200px'
      navHeight = 100
    }

    const scrollPosition = document.documentElement.scrollTop
    const sectionPos = [
      0,
      document.querySelector('#scroll-to-feature').offsetTop,
      document.querySelector('#scroll-to-product-info').offsetTop,
      document.querySelector('#scroll-to-team').offsetTop,
      document.querySelector('#scroll-to-contact').offsetTop
    ]

    for (let i = sectionPos.length - 1; i >= 0; i--) {
      if (scrollPosition >= sectionPos[i] - navHeight) {
        remClass()
        currentNav[i].classList.add('current-nav')
        break
      }
    }

    if (media.matches) {
      nav.style.height = '200px'
    } else {
      if (window.scrollY >= 20) nav.style.height = '25px'
      else nav.style.height = '80px'
    }
  })
})()
