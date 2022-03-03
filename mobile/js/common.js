// 탑 무브
$(document).ready(function () {

  $('.topMove').hide();

  $(window).on('scroll', function () { //스크롤 값의 변화가 생기면
    var scroll = $(window).scrollTop(); //스크롤의 거리


    // $('.text').text(scroll); 

    if (scroll > 300) { //500이상의 거리가 발생되면
      $('.topMove').fadeIn('slow');  //top보여라~~~~
    } else {
      $('.topMove').fadeOut('fast');//top안보여라~~~~
    }
  });

  $('.topMove').click(function (e) {
    e.preventDefault();
    //상단으로 스르륵 이동합니다.
    $("html,body").stop().animate({ "scrollTop": 0 }, 1000);
  });
});

// 헤더  & nav
$(document).ready(function () {

  // nav 열고 닫기
  var cnt = '0';
  $('.header_top a.menu_btn').click(function (e) {
    e.preventDefault();

    if (cnt % 2 != 0) {
      $('#gnb').slideUp('fast');
      cnt++;
    } else {
      $('#gnb').slideDown('slow');
      cnt++;
    }
  })


  // 2depth
  var depth2_set = [false, false, false, false];
  var idx ;
  
  $('#gnb .menu>a').click(function (e) {
    e.preventDefault();
    idx = $(this).parents('li').index();
    console.log(idx);
    if (depth2_set[idx] == false) {
      $(this).parents('li').siblings('li').children('ul').slideUp('fast');
      $(this).parents('li').children('ul').slideDown('slow');
      $('.menu a').children('h3').children('i').css({'transform':'rotate(0)'}).css('color','#333');
      $(this).children('h3').children('i').css({'transform':'rotate(180deg)'}).css('color','#f00');
      for(var i=0; i<depth2_set.length; i++){
        depth2_set[i]=false;
      }
      depth2_set[idx] = true;
    } else {
      $(this).parents('li').children('ul').slideUp('fast');
      $('.menu a').children('h3').children('i').css({'transform':'rotate(0)'}).css('color','#333');
      depth2_set[idx] = false;
    }
  });
});





