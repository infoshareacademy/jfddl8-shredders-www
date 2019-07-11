(function() {
  const cookieBox = document.querySelector('.cookie__box')
  const cookieButton = document.querySelector('.cookie__button')
  if (localStorage.getItem("confirmed") !== "1") {
    cookieBox.style.display = 'flex'
  }

  cookieButton.addEventListener('click', function(){
    cookieBox.style.display = 'none'
    localStorage.setItem("confirmed", "1");
  })
})();
