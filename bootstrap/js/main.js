document.addEventListener("DOMContentLoaded", function(){

  // 탑무브
  $('#topMove').hide();

  $(window).on('scroll', function () {
    var scroll = $(window).scrollTop();

    if (scroll > 300) { 
      $('#topMove').fadeIn('slow'); 
    } else {
      $('#topMove').fadeOut('fast');
    }
  });

  // modal in btn 

  // display 바꾸기
  $('.model .modal-body a').click(function(){
    
    var idx = $(this).index();
    console.log(idx);
    $(this).parent('div').next('.view_list').children('li').hide();
    $(this).parent('div').next('.view_list').children('li:eq('+ idx+')').show();
    
  })

    // mouse hover
  $('.model .modal-body a').mouseover(function(){
    $(this).siblings().children('img').css('webkitFilter',' grayscale(100%)').css('filter','gray');
  })
    // mouse leave
  $('.model .modal-body a').mouseleave(function(){
    $(this).siblings().children('img').css('webkitFilter',' grayscale(0)').css('filter','none');
  })


});

