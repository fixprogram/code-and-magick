(function() {
  'use strict';

  const cloudWidth = 420;
  const cloudHeight = 270;
  const gap = 10;
  const cloudX = 100;
  const cloudY = 10;
  const barWidth = 40;
  const barHeight = -130;
  const barGap = 50;
  const barY = 250;
  let barX = 160;

  let renderClouds = function(ctx, width, height, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
  };

  let renderBar = function(ctx, x, y, name, time, max) {
    let barNameY = 260;
    let barTimeY = barNameY - Math.abs(barHeight * (time / max) - 30);
    ctx.fillStyle = 'black';
    ctx.fillText(Math.floor(time), x, barTimeY);
    ctx.fillText(name, x, barNameY);
    if(name === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(0,0,255,' + Math.random() +')';
    }
    ctx.fillRect(x, y, barWidth, barHeight * (time / max));
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

    renderClouds(ctx, cloudWidth, cloudHeight, cloudX + gap, cloudY + gap, 'rgba(0,0,0,0.7');
    renderClouds(ctx, cloudWidth, cloudHeight, cloudX, cloudY, 'white');

    ctx.font = '16px PT Mono';
    ctx.fillStyle = 'black';
    ctx.textBaseline = 'hanging';
    ctx.fillText('Ура, вы победили!', 160, 40);
    ctx.fillText('Список результатов: ', 160, 60);

    let max = getMax(times);

    for(let i = 0; i < names.length; i++) {
      renderBar(ctx, barX, barY, names[i], times[i], max);
      barX += barGap + barWidth;
    }
  };
})();
