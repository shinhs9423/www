$(document).ready(function(){

  // 토글 시작
  // 초기상황 만들기
  $('.content_area dl').stop().slideUp('fast');
  // 토글 표현식 변수 준비
  var toggle_onOff = [];
  var toggle_cnt;
  toggle_cnt = $('.content_area>div').length; 

  for (let i = 0; i < toggle_cnt; i++) {
    toggle_onOff[i] = 'off';
  }
  
  // 토글 펑션
  $('.content_area h2').on('click',function(){

    var index = $(this).parents('div').index();

    if (toggle_onOff[index] == 'off') {

      for (let i = 0; i < toggle_cnt; i++) {
        toggle_onOff[i] = 'off';
      }

      $('.content_area dl').stop().slideUp('fast');
      $('.content_area div:eq('+index+') dl').stop().slideDown('slow');

      $('.content_area div h2 i').css({'transform':'rotate(0'});
      $('.content_area div:eq('+index+') h2 i').css({'transform':'rotate(180deg'});
      
      $('.content_area div h2').css({'background':'none'});
      $('.content_area div h2 a').css({'color':'#333'});
      $('.content_area div:eq('+index+') h2').css({'background':'#333'});
      $('.content_area div:eq('+index+') h2 a').css({'color':'#fff'});
      toggle_onOff[index] = 'on';

    } else if (toggle_onOff[index] == 'on') {
      toggle_onOff[index] = 'off';
      $('.content_area div:eq('+index+') dl').stop().slideUp('fast');
      $('.content_area div:eq('+index+') h2').css({'background':'none'});
      $('.content_area div:eq('+index+') h2 i').css({'transform':'rotate(0'});
      $('.content_area div:eq('+index+') h2 a').css({'color':'#333'});
    }
  });

  // top move
  $(window).on('scroll',function(){
    var scroll = $(window).scrollTop();

    if (scroll >= 200) {
      $('.top_move').fadeIn('slow');
    } else if (scroll < 200) {
      $('.top_move').fadeOut('fast');
    }
  });
});