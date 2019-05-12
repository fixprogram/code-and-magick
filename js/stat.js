(function() {
  'use strict';

  const Cloud = {
    WIDTH: 420,
    HEIGHT: 270,
    GAP: 10,
    X: 100,
    Y: 10
  };

  let Bar = {
    WIDTH: 40,
    HEIGHT: -130,
    GAP: 50,
    X: 160,
    Y: 250
  };

  let renderClouds = function(ctx, width, height, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
  };

  let renderBar = function(ctx, width, height, x, y, name, time, max) {
    let barNameY = 260;
    let barTimeY = barNameY - Math.abs(height * (time / max) - 30);
    ctx.fillStyle = 'black';
    ctx.fillText(Math.floor(time), x, barTimeY);
    ctx.fillText(name, x, barNameY);
    if(name === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(0,0,255,' + Math.random() +')';
    }
    ctx.fillRect(x, y, width, height * (time / max));
  };

  let getMax = function(arr) {
    let max = arr[0];
    for(let i = 1; i < arr.length; i++) {
      if(max < arr[i]) {
        max = arr[i];
      }
    }
    return Math.floor(max);
  };

  window.renderStatistics = function(ctx, names, times) {

    renderClouds(ctx, Cloud.WIDTH, Cloud.HEIGHT, Cloud.X + Cloud.GAP, Cloud.Y + Cloud.GAP, 'rgba(0,0,0,0.7');
    renderClouds(ctx, Cloud.WIDTH, Cloud.HEIGHT, Cloud.X, Cloud.Y, 'white');

    ctx.font = '16px PT Mono';
    ctx.fillStyle = 'black';
    ctx.textBaseline = 'hanging';
    ctx.fillText('Ура, вы победили!', 160, 40);
    ctx.fillText('Список результатов: ', 160, 60);

    let max = getMax(times);
    let gap = 0;

    for(let i = 0; i < names.length; i++) {
      renderBar(ctx, Bar.WIDTH, Bar.HEIGHT, Bar.X + gap, Bar.Y, names[i], times[i], max);
      gap += Bar.GAP + Bar.WIDTH;
    }
  };
})();
