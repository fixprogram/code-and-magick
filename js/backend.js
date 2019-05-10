(function() {

  "use strict";

  let createXhr = function(method, url, onSuccess, onError) {

    let xhr = new XMLHttpRequest();

    xhr.responseType = 'json';

    xhr.addEventListener('load', function() {
      if(xhr.status === 200) {
        onSuccess(xhr.response);
      } else {
        onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });

    xhr.addEventListener('error', function() {
      onError('Произошла ошибка соединения');
    });

    xhr.addEventListener('timeout', function(){
      onError('Превышено время ожидания');
    });

    xhr.open(method, url);
    return xhr;
  };

  let load = function(onSuccess, onError) {
     createXhr('GET', 'https://js.dump.academy/code-and-magick/data', onSuccess, onError).send();
  };

  let save = function(onSuccess, onError, data) {
    createXhr('POST', 'https://js.dump.academy/code-and-magick', onSuccess, onError).send(data);
  };

  window.backend = {
    load: load,
    save: save
  };

})();
