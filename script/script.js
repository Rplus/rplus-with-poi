'use strict';

var
audio = document.getElementById('poiMusic'),
_colR = document.querySelector('.col-r'),
_body = document.getElementsByTagName('body')[0],
playing = function () {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
    _body.classList.remove('ranbow')
  }
},
hideAudio = function () {
  audio.classList.remove('show');
}
;

audio.addEventListener('loadedmetadata', function () {

  audio.addEventListener('play', function(){
    _body.classList.add('ranbow');
    hideAudio();
  }, false);

  audio.addEventListener('pause', function(){
    _body.classList.remove('ranbow');
  }, false);

  audio.addEventListener('ended', function(){
    this.currentTime = 0;
  }, false);

  _colR.addEventListener('click', playing);

}, false);

_colR.addEventListener('mousewheel', function () {
  audio.classList.toggle('show');
}, false);