$(document).ready(function () {
  var timeonoff; //자동기능 구현 변수



  timeonoff = setInterval(function () {
  

    $('.content_area li dl:eq(0) dd').first().appendTo('.content_area li dl:eq(0)');
    $('.content_area li dl:eq(1) dd').first().appendTo('.content_area li dl:eq(1)');
    $('.content_area li dl:eq(2) dd').first().appendTo('.content_area li dl:eq(2)');


    $('.content_area li dl:eq(0)').children('dd').last().css('color','#999').css('backgroundColor','').css('fontWeight','400');
    $('.content_area li dl:eq(1)').children('dd').last().css('color','#999').css('backgroundColor','').css('fontWeight','400');
    $('.content_area li dl:eq(2)').children('dd').last().css('color','#999').css('backgroundColor','').css('fontWeight','400');


    $('.content_area li dl:eq(0)').children('dd').first().css('color','#333').css('backgroundColor','#f4f4f4').css('fontWeight','700');
    $('.content_area li dl:eq(1)').children('dd').first().css('color','#333').css('backgroundColor','#eee').css('fontWeight','700');
    $('.content_area li dl:eq(2)').children('dd').first().css('color','#333').css('backgroundColor','#f4f4f4').css('fontWeight','700');


  }, 5000);

});