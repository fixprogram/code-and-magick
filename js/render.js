(function () {

  'use strict';

  let wizardTemplate = document.querySelector('#similar-wizard-template');

  let renderWizard = function (wizard) {
    let element = wizardTemplate.content.cloneNode(true);

    let wizardElement = element.querySelector('.wizard');
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    element.querySelector('.setup-similar-label').innerText = wizard.name;

    return element;
  };

  let similar = document.querySelector('.setup-similar');
  let similarList = document.querySelector('.setup-similar-list');

  window.render = function (data) {
    let takeNumber = data.length > 4 ? 4 : data.length;
    similarList.innerHTML = '';
    for (let i = 0; i < takeNumber; i++) {
      similarList.appendChild(renderWizard(data[i]));
    }

    similar.classList.remove('hidden');
  };

})();
