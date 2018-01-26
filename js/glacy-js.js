'use strict';
(function () {
  var backGround = document.querySelectorAll('.container');
  var back1 = document.getElementById('btn-1');
  var back2 = document.getElementById('btn-2');
  var back3 = document.getElementById('btn-3');
  var slider = document.querySelector('.slider');

  var COLOR_1 = 'rgb(132, 157, 143)';
  var COLOR_2 = 'rgb(137, 150, 166)';
  var COLOR_3 = 'rgb(157, 139, 132)';

  slider.addEventListener('click', function(evt) {
    if (evt.target == back1) {
      paintAll(COLOR_1);
    } else if (evt.target == back2) {
      paintAll(COLOR_2);
    } else if (evt.target == back3) {
      paintAll(COLOR_3);
    }
  });

  function paintAll(color) {
    for (var i = 0; i < backGround.length; i++) {
    backGround[i].setAttribute('style', 'background-color:' + color);
    }
  };

})();
