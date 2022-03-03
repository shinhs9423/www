// visual

$(document).ready(function () {
  var timeonoff; //자동기능 구현 변수
  var cnt = true; // true=> 다음, false=>이전

  $('.visual .right_btn').click(function (e) {
    e.preventDefault();
    clearInterval(timeonoff); //타이머를 멈춘다
    $('.visual li').first().appendTo('.visual ul');
    // ul(부모)의 자식  li중에서 첫번째 li를 마지막으로 위치 이동.

  });

  $('.visual .left_btn').click(function (e) {
    e.preventDefault();
    clearInterval(timeonoff); //타이머를 멈춘다
    $('.visual li').last().prependTo('.visual ul');
    // ul(부모)의 자식  li중에서 마지막번째 li를 첫번째로 위치 이동.
 
  });

  timeonoff = setInterval(function () {
    if (cnt == true) {
      $('.visual li').first().appendTo('.visual ul');
    } else {
      $('.visual li').last().prependTo('.visual ul');
    }
  }, 4000);

});

