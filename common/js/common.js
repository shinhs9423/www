// 상단으로 이동

// footer select box

$(document).ready(function () {

  $('.select_box .more').toggle(function () {
    $('.select_box .family_site').fadeIn('slow');
  }, function(){
    $('.select_box .family_site').fadeOut('fast');
  });
  
  //tab키 처리
  $('.select_box .more').on('focus', function () {
    $('.select_box .family_site').fadeIn('slow');
  });
  $('.select_box .family_site li:last a').on('blur', function () {
    $('.select_box .family_site').fadeOut('fast');
  });



// top move btn

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


  var $display = document.getElementById('searchForm').style.display;
  $display = 'none';

  function open_close_search () {
    if ($display == 'none') {
      $('#searchForm').slideDown('fast');
      $display = 'block';
      console.log($display);
    } else if ($display != 'none') {
      $('#searchForm').slideUp('slow');
      $display = 'none';
      console.log($display);
    }
  }

  function check_search () {
    if (!document.board_form.search.value)
    {
      alert("검색어를 입력하세요!");    
      document.board_form.search.focus();
      return;
    }
    document.board_form.submit();
  }
  
});