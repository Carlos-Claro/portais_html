document.addEventListener('DOMContentLoaded', function(){
  var elemSidenav = document.querySelectorAll('.sidenav');
  var sidenav = M.Sidenav.init(elemSidenav);

  var elemSelect = document.querySelectorAll('select');
  var select = M.FormSelect.init(elemSelect);

  var elemModal = document.querySelectorAll('.modal');
  var modal = M.Modal.init(elemModal);

  M.updateTextFields();

  var elemContador = document.querySelectorAll('#mensagem');
  var contador = M.CharacterCounter.init(elemContador);
});
