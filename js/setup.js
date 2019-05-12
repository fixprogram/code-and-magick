(function() {
  "use strict";

  const Code = {
    ESC: 27,
    ENTER: 13
  };

  let setup = document.querySelector('.setup');
  let setupOpen = document.querySelector('.setup-open');
  let setupClose = document.querySelector('.setup-close');

  const setupStartX = setup.style.left;
  const setupStartY = setup.style.top;

  let isEscCode = function(evt) {
    if(evt.keyCode === Code.ESC) {
      closePopup();
    }
  };

  let openPopup = function() {
    setup.classList.remove('hidden');

    document.addEventListener('keydown', isEscCode);
  };

  let closePopup = function() {
    setup.classList.add('hidden');
    setup.style.left = setupStartX;
    setup.style.top = setupStartY;
    document.removeEventListener('keydown', isEscCode);
  };

  setupOpen.addEventListener('click', function() {
    openPopup();
  });

  setupOpen.addEventListener('keydown', function(evt){
    if(evt.keyCode === Code.ENTER) {
      openPopup();
    }
  });

  setupClose.addEventListener('click', function() {
    closePopup();
  });

  setupClose.addEventListener('keydown', function(evt) {
    if(evt.keyCode === Code.ENTER) {
      closePopup();
    }
  });


  let setupInputName = document.querySelector('.setup-user-name');

  setupInputName.addEventListener('invalid', function(){
    if(setupInputName.validity.tooShort) {
      setupInputName.setCustomValidity('Имя должно состоять минимум из двух символов!');
    } else if(setupInputName.validity.tooLong) {
      setupInputName.setCustomValidity('Имя должно быть короче 25 символов!');
    } else if(setupInputName.validity.valueMissing) {
      setupInputName.setCustomValidity('Обязательное поле.');
    } else {
      setupInputName.setCustomValidity('');
    }
  });

  setupInputName.addEventListener('input', function(evt){
    let target = evt.target;
    if(target.value.length < 2) {
      setupInputName.setCustomValidity('Имя должно состоять минимум из двух символов!');
    } else {
      setupInputName.setCustomValidity('');
    }
  });

  let setupForm = document.querySelector('.setup-wizard-form');
  let setupSubmit = document.querySelector('.setup-submit');

  setupSubmit.addEventListener('click', function(evt){
    window.backend.upload(function(response){
      setup.classList.add('hidden');
      console.log(response);
    }, window.onError, new FormData(setupForm));
    evt.preventDefault();
  });

  setupSubmit.addEventListener('keydown', function(evt){
    if(evt.keyCode === Code.ENTER) {
      setupForm.submit();
    }
  });

})();
