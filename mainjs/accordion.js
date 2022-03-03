document.addEventListener("DOMContentLoaded", function () {

  $('.eventSlideMenu .img02').animate({ left: 800 }, 450).clearQueue();
  $('.eventSlideMenu .img03').animate({ left: 1000 }, 450).clearQueue();
  $('.eventSlideMenu .title').css('width','400px').clearQueue();
  $('.eventSlideMenu p.title:eq(0)').css('fontSize','2.5em').clearQueue();
  $('.eventSlideMenu .title:eq(1)').css('width','200px').clearQueue(); 
  $('.eventSlideMenu .title:eq(2)').css('width','200px').clearQueue(); 
  



  $('.eventSlideMenu ul li span').mouseenter(function (event) {
      var $target = $(event.target); // == $(this)



      // clearInterval(timeonoff);
      
      if ($target.is('.eventSlideMenu .buttonMenu01')) {
          $('.eventSlideMenu .img02').animate({ left: 800 }, 450).clearQueue();
          $('.eventSlideMenu .img03').animate({ left: 1000 }, 450).clearQueue();
          $('.eventSlideMenu .title').css('width','400px').clearQueue();

          // 아코디언 너비
          $('.eventSlideMenu .title:eq(1)').css('width','200px').clearQueue(); 
          $('.eventSlideMenu .title:eq(2)').css('width','200px').clearQueue(); 

          // 폰트 사이즈
          $('.eventSlideMenu p.title').css('fontSize','1.333em').clearQueue();
          $('.eventSlideMenu p.title:eq(0)').css('fontSize','2.5em').clearQueue();

          // 투명도
          $('.bg_box').css('opacity','0');
          $($target).siblings('.bg_box').css('opacity','1');


          // $('.eventSlideMenu .img04').animate({ left: 450 }, 450).clearQueue();
          cnt = 1;
      } else if ($target.is('.buttonMenu02')) {
          $('.eventSlideMenu .img02').animate({ left: 200 }, 450).clearQueue();
          $('.eventSlideMenu .img03').animate({ left: 1000 }, 450).clearQueue();
          $('.eventSlideMenu .title').css('width','400px').clearQueue(); 

          $('.eventSlideMenu p.title').css('fontSize','1.333em').clearQueue();
          $('.eventSlideMenu p.title:eq(1)').css('fontSize','2.5em').clearQueue();

          $('.eventSlideMenu .title:eq(0)').css('width','200px').clearQueue(); 
          $('.eventSlideMenu .title:eq(2)').css('width','200px').clearQueue(); 


          $('.bg_box').css('opacity','0');
          $($target).siblings('.bg_box').css('opacity','1');
          // $('.eventSlideMenu .img04').animate({ left: 450 }, 450).clearQueue();
          cnt = 2;
      } else if ($target.is('.buttonMenu03')) {
          $('.eventSlideMenu .img02').animate({ left: 200 }, 450).clearQueue();
          $('.eventSlideMenu .img03').animate({ left: 400 }, 450).clearQueue();
          $('.eventSlideMenu .title').css('width','400px').clearQueue(); 

          $('.eventSlideMenu p.title').css('fontSize','1.333em').clearQueue();
          $('.eventSlideMenu p.title:eq(2)').css('fontSize','2.5em').clearQueue();

          $('.eventSlideMenu .title:eq(0)').css('width','200px').clearQueue(); 
          $('.eventSlideMenu .title:eq(1)').css('width','200px').clearQueue(); 

          $('.bg_box').css('opacity','0');
          $($target).siblings('.bg_box').css('opacity','1');
          // $('.eventSlideMenu .img04').animate({ left: 450 }, 450).clearQueue();
          cnt = 0;
      }
      // timeonoff= setInterval(move_gallery, 4000);  //부활~~

  });


});