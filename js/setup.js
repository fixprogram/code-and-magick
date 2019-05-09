(function() {
  "use strict";

  const ESC_CODE = 27;
  const ENT_CODE = 13;
  const data = {
    wizardNames: ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
    wizardLastNames: ['даМарья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'],
    wizardCoat: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
    wizardEyes: ['black', 'red', 'blue', 'yellow', 'green']
  };

  let setup = document.querySelector('.setup');
  let setupOpen = document.querySelector('.setup-open');
  let setupClose = document.querySelector('.setup-close');
  let setupSimilar = document.querySelector('.setup-similar');
  let similarWizards = [];
  let similarWizard = {};

  let getRandomNum = function(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  };

  let createWizard = function(count, data) {
    for(let i = 0; i < count; i++) {
      similarWizard = {
        name: data.wizardNames[getRandomNum(0, data.wizardNames.length)] + ' ' + data.wizardLastNames[getRandomNum(0, data.wizardLastNames.length)],
        coatColor: data.wizardCoat[getRandomNum(0, data.wizardCoat.length)],
        eyesColor: data.wizardEyes[getRandomNum(0, data.wizardEyes.length)],
      };
      similarWizards.push(similarWizard);
    }
  };

  createWizard(4, data);
  console.log(similarWizards);

  let similarWizardsList = document.querySelector('.setup-similar-list');
  let similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  let createWizardItem = function(wizard) {
    let similarWizardItem = similarWizardTemplate.cloneNode(true);

    similarWizardItem.querySelector('.setup-similar-label').textContent = wizard.name;
    similarWizardItem.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    similarWizardItem.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return similarWizardItem;
  };

  let fragment = document.createDocumentFragment();

  for(let i = 0; i < similarWizards.length; i++) {
    fragment.appendChild(createWizardItem(similarWizards[i]));
  }

  similarWizardsList.appendChild(fragment);

  setupSimilar.classList.remove('hidden');



  let isEscCode = function(evt) {
    if(evt.keyCode === ESC_CODE) {
      setup.classList.add('hidden');
    }
  };

  let openPopup = function() {
    setup.classList.remove('hidden');

    document.addEventListener('keydown', isEscCode);
  };

  let closePopup = function() {
    setup.classList.add('hidden');
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

  setupSubmit.addEventListener('click', function(){
    setupForm.submit();
  });

  setupSubmit.addEventListener('keydown', function(evt){
    if(evt.keyCode === ENT_CODE) {
      setupForm.submit();
    }
  });

  const setupFireballColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  let inputCoatColor = document.querySelector('.coat-color');
  let inputEyesColor = document.querySelector('.eyes-color');
  let inputFireballColor = document.querySelector('.fireball-color');

  let wizardCoat = document.querySelector('.wizard-coat');
  let wizardEyes = document.querySelector('.wizard-eyes');
  let wizardFireball = document.querySelector('.setup-fireball-wrap');

  wizardEyes.addEventListener('click', function() {
    let color = data.wizardEyes[getRandomNum(0, data.wizardEyes.length)];
    wizardEyes.style.fill = color;
    inputEyesColor.value = color;
  });

  wizardCoat.addEventListener('click', function() {
    let color = data.wizardCoat[getRandomNum(0, data.wizardCoat.length)];
    wizardCoat.style.fill = color;
    inputCoatColor.value = color;
  });

  wizardFireball.addEventListener('click', function() {
    let color = setupFireballColors[getRandomNum(0, setupFireballColors.length)];
    wizardFireball.style.background = color;
    inputFireballColor.value = color;
  });

})();
