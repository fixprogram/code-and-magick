(function() {
  "use strict";

  const ESC_CODE = 27;
  const ENT_CODE = 13;
  const setupStartX = 50 + '%';
  const setupStartY = 80 + 'px';
  const data = {
    // wizardNames: ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
    // wizardLastNames: ['даМарья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'],
    wizardCoat: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
    wizardEyes: ['black', 'red', 'blue', 'yellow', 'green']
  };

  let setup = document.querySelector('.setup');
  let setupOpen = document.querySelector('.setup-open');
  let setupClose = document.querySelector('.setup-close');
  // let similarWizards = [];
  // let similarWizard = {};

  // let createWizard = function(count, data) {
  //   for(let i = 0; i < count; i++) {
  //     similarWizard = {
  //       name: data.wizardNames[getRandomNum(0, data.wizardNames.length)] + ' ' + data.wizardLastNames[getRandomNum(0, data.wizardLastNames.length)],
  //       coatColor: data.wizardCoat[getRandomNum(0, data.wizardCoat.length)],
  //       eyesColor: data.wizardEyes[getRandomNum(0, data.wizardEyes.length)],
  //     };
  //     similarWizards.push(similarWizard);
  //   }
  // };

  // createWizard(4, data);
  // console.log(similarWizards);

  let isEscCode = function(evt) {
    if(evt.keyCode === ESC_CODE) {
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
    if(evt.keyCode === ENT_CODE) {
      openPopup();
    }
  });

  setupClose.addEventListener('click', function() {
    closePopup();
  });

  setupClose.addEventListener('keydown', function(evt) {
    if(evt.keyCode === ENT_CODE) {
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
    window.backend.save(function(response){
      setup.classList.add('hidden');
      console.log(response);
    }, window.onError, new FormData(setupForm));
    evt.preventDefault();
  });

  setupSubmit.addEventListener('keydown', function(evt){
    if(evt.keyCode === ENT_CODE) {
      setupForm.submit();
    }
  });

})();
