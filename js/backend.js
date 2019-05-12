(function() {

  "use strict";

  const Method = {
    LOAD: 'GET',
    UPLOAD: 'POST'
  };

  const ServerUrl = {
    LOAD: 'https://js.dump.academy/code-and-magick/data',
    UPLOAD: 'https://js.dump.academy/code-and-magick'
  };

  let createXhr = function(method, URL, onSuccess, onError) {
    let xhr = new XMLHttpRequest();

    xhr.responseType = 'json';

    xhr.addEventListener('load', function() {
      if(xhr.status === 200) {
        onSuccess(xhr.response);
      } else {
        onError('Код ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });

    xhr.addEventListener('error', function() {
      onError('Ошибка сервера');
    });

    xhr.addEventListener('timeout', function() {
      onError('Превышено время ожидания');
    });

    xhr.open(method, URL);
    return xhr;
  };

  let load = function(onSuccess, onError){
    createXhr(Method.LOAD, ServerUrl.LOAD, onSuccess, onError).send();
  };

  let upload = function(onSuccess, onError, data) {
    createXhr(Method.UPLOAD, ServerUrl.UPLOAD, onSuccess, onError).send(data);
  };

  window.backend = {
    load: load,
    upload: upload
  };

})();
