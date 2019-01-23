'use strict';

var NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'];
var SURNAMES = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'];
var COAT_COLORS = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'];
var EYES_COLORS = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'];
var RANDOM_WIZARDS = [];
var WIZARDS_COUNT = 4;


var showHiddenBlock = function (hiddenBlock) {
  var setupDialog = document.querySelector(hiddenBlock);
  setupDialog.classList.remove('hidden');
};

var generateRandom = function (features) {
  return Math.floor(Math.random() * features.length);
};

var generateRandomWizard = function (names, surnames, coatColors, eyesColors) {
  return {
    name: names[generateRandom(names)] + ' ' + surnames[generateRandom(surnames)],
    coatColor: coatColors[generateRandom(coatColors)],
    eyesColor: eyesColors[generateRandom(eyesColors)]
  };
};

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');
var fragment = document.createDocumentFragment();

var generateWizardsFragment = function (wizards, wizardTemplate) {
  var wizardElement = wizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizards.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizards.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizards.eyesColor;
  fragment.appendChild(wizardElement);
};


showHiddenBlock('.setup');
for (var i = 0; i < WIZARDS_COUNT; i++) {
  RANDOM_WIZARDS[i] = generateRandomWizard(NAMES, SURNAMES, COAT_COLORS, EYES_COLORS);
}
for (var j = 0; j < RANDOM_WIZARDS.length; j++) {
  generateWizardsFragment(RANDOM_WIZARDS[j], similarWizardTemplate);
}
similarListElement.appendChild(fragment);
showHiddenBlock('.setup-similar');
