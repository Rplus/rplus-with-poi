var POI = {};

(function(window, console, document, POI, undefined) {

"use strict";

POI.iframe = document.getElementById('vimeoPlayer');
POI._body = document.getElementsByTagName('body')[0];
POI._columnR = document.querySelector('.col-r');
POI.url = POI.iframe.src.split('?')[0];


// Helper function for sending a message to the player
POI.post = function(action, value) {
  var data = { method: action };

  if (value) {
    data.value = value;
  }

  POI.iframe.contentWindow.postMessage(JSON.stringify(data), POI.url);
};

// Handle messages received from the player
POI.onMessageReceived = function(e) {
  var data = JSON.parse(e.data);

  if ('playProgress' !== data.event) {
    console.log('Vimeo API: ' + data.event);
  }

  switch (data.event) {
    case 'ready':
    POI.onReady();
    break;

    case 'playProgress':
    POI.onPlayProgress(data.data);
    break;

    case 'pause':
    POI.onPause();
    break;

    case 'finish':
    POI.onFinish();
    break;

    case 'play':
    POI.onPlay();
    break;
  }
};

POI.onReady = function() {

  console.log('music loaded');

  POI._columnR.addEventListener('click', function() {
    var switchTo = POI._body.classList.contains('playing') ? 'pause' : 'play';
    POI.post(switchTo);
  }, false);

  POI._columnR.addEventListener('contextmenu', function(event) {
    POI.iframe.classList.toggle('show');
  }, false);

  POI._body.classList.add('music-loaded');

  POI.post('addEventListener', 'play');
  POI.post('addEventListener', 'pause');
  POI.post('addEventListener', 'finish');
  POI.post('addEventListener', 'playProgress');

};

POI.onPlay = function() {
  console.log('music onPlay');
  POI._body.classList.add('playing');
};

POI.onPause = function() {
  console.log('music onPause');
  POI._body.classList.remove('playing');
};

POI.onFinish = function() {
  console.log('music onFinish');
  POI._body.classList.remove('playing');
  POI._body.classList.add('end');
};

POI.onPlayProgress = function(data) {
  POI._body.classList.add('playing');
};

// Listen for messages from the player
if (window.addEventListener){
  window.addEventListener('message', POI.onMessageReceived, false);
}
else {
  window.attachEvent('onmessage', POI.onMessageReceived, false);
}

/* global document, console, window */
})(window, console, document, POI, undefined);
