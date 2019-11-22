document.addEventListener('DOMContentLoaded', function(){
  var elemSidenav = document.querySelectorAll('.sidenav');
  var sidenav = M.Sidenav.init(elemSidenav);

  var elemSelect = document.querySelectorAll('select');
  var select = M.FormSelect.init(elemSelect);

  var elemCarousel = document.querySelectorAll('.carousel');
  var carousel = M.Carousel.init(elemCarousel, {
    fullWidth: true
  });
});
