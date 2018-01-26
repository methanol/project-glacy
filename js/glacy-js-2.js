'use strict';
(function () {
  var letterForm = document.querySelector('.we-will-answer');
  var btnClose = letterForm.querySelector('.close');
  var btnOpen = document.querySelector('.back');

  var ESC_CODE = 27;
  var ENTER_CODE = 13;

  btnOpen.addEventListener('click', function(evt) {
    evt.preventDefault();
    openMe(letterForm);
    window.addEventListener('keydown', function(evt) {
      if (evt.keyCode === ESC_CODE) {
        closeMe(letterForm);
      }
    });
  });

  btnOpen.addEventListener('keydown', function(evt) {
    if (evt.keyCode === ENTER_CODE) {
      evt.preventDefault();
      openMe(letterForm);
      window.addEventListener('keydown', function(evt) {
        if (evt.keyCode === ESC_CODE) {
          closeMe(letterForm);
        }
      });
    }
  });

  btnClose.addEventListener('click', function(evt) {
    closeMe(letterForm);
  });

  btnClose.addEventListener('keydown', function(evt) {
    if (evt.keyCode === ENTER_CODE) {
      closeMe(letterForm);
    }
  });

  function openMe(wind) {
    wind.style.display = 'block';
  }

  function closeMe(wind) {
    wind.style.display = 'none';
  }

  console.dir(letterForm);
})();
