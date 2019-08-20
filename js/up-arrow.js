(function() {
  const upArrow = document.querySelector('.up-arrow');

  window.addEventListener('scroll', function(){
    upArrow.style.display = 'block'
    if (window.scrollY == 0) upArrow.style.display = 'none'
  })

  upArrow.addEventListener('click', function(){
    window.scrollTo({
      top:0,
      left:0,
      behavior: 'smooth'
    })
   })
})();
