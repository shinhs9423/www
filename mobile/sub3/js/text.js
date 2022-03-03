$(document).ready(function () {
  var timeonoff; //자동기능 구현 변수



  timeonoff = setInterval(function () {
  

    $('.content_area ul li dl:eq(0) dd').first().appendTo('.content_area li dl:eq(0)');
    $('.content_area ul li dl:eq(1) dd').first().appendTo('.content_area li dl:eq(1)');
    $('.content_area ul li dl:eq(2) dd').first().appendTo('.content_area li dl:eq(2)');


    $('.content_area ul li dl:eq(0)').children('dd').last().css('color','#666').css('backgroundColor','');
    $('.content_area ul li dl:eq(1)').children('dd').last().css('color','#666').css('backgroundColor','');
    $('.content_area ul li dl:eq(2)').children('dd').last().css('color','#666').css('backgroundColor','');


    $('.content_area ul li dl:eq(0)').children('dd').first().css('color','#fff').css('backgroundColor','#0a2267');
    $('.content_area ul li dl:eq(1)').children('dd').first().css('color','#fff').css('backgroundColor','#0a2267');
    $('.content_area ul li dl:eq(2)').children('dd').first().css('color','#fff').css('backgroundColor','#0a2267');


  }, 5000);

});