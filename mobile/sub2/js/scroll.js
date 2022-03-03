document.addEventListener("DOMContentLoaded", function () {



  //스크롤의 좌표가 변하면.. 스크롤 이벤트
  $(window).on('scroll', function () {
    var scroll = $(window).scrollTop();
    //스크롤top의 좌표를 담는다

    console.log('scroll = '+scroll);
    //스크롤 좌표의 값을 찍는다.

    var $box1 = $('.con_list:eq(1) li:eq(0)').height();
    console.log('box1 = ' + $box1);
    var $box2 = $('.con_list:eq(1) li:eq(1)').height();
    console.log('box2 = ' + $box2);
    var $box3 = $('.con_list:eq(1) li:eq(2)').height();
    console.log('box3 = ' + $box3);



    //스크롤의 거리의 범위를 처리
    if (scroll >= 400 && scroll < 440 + $box1) {
      $('.con_list:eq(1) li:eq(0) img').css('position','sticky').css('top','450');

    } else if (scroll >= 1400 && scroll < 3200) {

      $('#content div.business').addClass('boxMove');
    } else if (scroll >= 3200 && scroll < 4100) {

      $('#content div.management').addClass('boxMove');
    } else if (scroll >= 4100 && scroll > 4200) {

      $('#content div.notice').addClass('boxMove');
    }
  });


});