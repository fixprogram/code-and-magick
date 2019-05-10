(function () {

  'use strict';

  let wizards = [];

  let coatColor;
  let eyesColor;

  let getRank = function (wizard) {
    let rank = 0;

    if (wizard.colorCoat === coatColor) {
      rank += 2;
    }

    if (wizard.colorEyes === eyesColor) {
      rank += 1;
    }

    return rank;
  };

  let namesComparator = function (leftName, rightName) {
    if (leftName > rightName) {
      return 1;
    } else if (leftName < rightName) {
      return -1;
    } else {
      return 0;
    }
  };

  let wizardsComparator = function (left, right) {
    let rankDiff = getRank(right) - getRank(left);
    return rankDiff === 0 ? namesComparator(left.name, right.name) : rankDiff;
  };

  let updateFilter = function () {
    window.render(wizards.sort(wizardsComparator));
  };

  window.wizard.onCoatChange = function (color) {
    coatColor = color;
    updateFilter();
  };
  window.wizard.onEyesChange = function (color) {
    eyesColor = color;
    updateFilter();
  };

  let onSuccess = function (data) {
    wizards = data;
    updateFilter();
  };

  window.onError = function (errorMessage) {
    let node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  window.backend.load(onSuccess, onError);
})();
