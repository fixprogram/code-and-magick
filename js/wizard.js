(function () {

  'use strict';

  let getRandomElement = function (array) {
    let randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  };

  let wizard = {
    onEyesChange: function (color) {
      return color;
    },
    onCoatChange: function (color) {
      return color;
    }
  };

  let wizardElement = document.querySelector('.setup-wizard');

  let wizardCoat = wizardElement.querySelector('.wizard-coat');
  let wizardCoatInput = document.querySelector('.coat-color');
  const wizardCoatColors = [
        'rgb(146, 100, 161)',
        'rgb(215, 210, 55)',
        'rgb(241, 43, 107)',
        'rgb(101, 137, 164)',
        'rgb(0, 0, 0)',
        'rgb(215, 210, 55)',
        'rgb(56, 159, 117)',
        'rgb(241, 43, 107)'
    ];

  wizardCoat.addEventListener('click', function () {
    let newColor = getRandomElement(wizardCoatColors);
    this.style.fill = newColor;
    wizard.onCoatChange(newColor);
    wizardCoatInput.value = newColor;
  });

  let wizardFireball = document.querySelector('.setup-fireball-wrap');
  let wizardFireballColor = document.querySelector('.fireball-color');
  const wizardFireballColors = [
        '#ee4830',
        '#30a8ee',
        '#5ce6c0',
        '#e848d5',
        '#e6e848'
    ];

  wizardFireball.addEventListener('click', function() {
    let newColor = getRandomElement(wizardFireballColors);
    this.style.background = newColor;
    wizardFireballColor.value = newColor;
  });

  let wizardEyesElement = wizardElement.querySelector('.wizard-eyes');
  let wizardEyesInput = document.querySelector('.eyes-color');
  const wizardEyesColors = [
        'red',
        'orange',
        'yellow',
        'green',
        'lightblue',
        'blue',
        'purple'
    ];

  wizardEyesElement.addEventListener('click', function () {
    let newColor = getRandomElement(wizardEyesColors);
    this.style.fill = newColor;
    wizard.onEyesChange(newColor);
    wizardEyesInput.value = newColor;
  });

  window.wizard = wizard;
})();
