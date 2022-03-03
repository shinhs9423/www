$(document).ready(function () {
  var timeonoff; //자동기능 구현 변수
  var cnt = true; // true=> 다음, false=>이전
  var bg_cnt = 0; // 숫자 0

  $('.RightBtn').click(function (e) {
    e.preventDefault();
    clearInterval(timeonoff); //타이머를 멈춘다

    $('.gallery_box li').first().appendTo('.gallery_box ul');
    // ul(부모)의 자식  li중에서 첫번째 li를 마지막으로 위치 이동.
    bg_cnt++;
    if (bg_cnt % 2 == 0) {
      $('.gallery_box li').first().children('dl').css('backgroundColor','#fcfcfc');
    } else {
      $('.gallery_box li').first().children('dl').css('backgroundColor','#f4f4f4');
    }
  });

  $('.leftBtn').click(function (e) {
    e.preventDefault();
    clearInterval(timeonoff); //타이머를 멈춘다

    $('.gallery_box li').last().prependTo('.gallery_box ul');
    // ul(부모)의 자식  li중에서 마지막번째 li를 첫번째로 위치 이동.
    bg_cnt++;
    if (bg_cnt % 2 == 0) {
      $('.gallery_box li').first().children('dl').css('backgroundColor','#fcfcfc');
    } else {
      $('.gallery_box li').first().children('dl').css('backgroundColor','#f4f4f4');
    }
  });

  timeonoff = setInterval(function () {
    if (cnt == true) {
      $('.gallery_box li').first().appendTo('.gallery_box ul');
    } else {
      $('.gallery_box li').last().prependTo('.gallery_box ul');
    }
  }, 4000);

});