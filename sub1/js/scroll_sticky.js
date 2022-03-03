$(document).ready(function () {
        

  var smh= $('.visual').height();


   //스크롤의 좌표가 변하면.. 스크롤 이벤트
  $(window).on('scroll',function(){
      var scroll = $(window).scrollTop();
      //스크롤top의 좌표를 담는다
     
      console.log(scroll);
      //스크롤 좌표의 값을 찍는다.
      
      //sticky menu 처리
      if(scroll>smh){ 
          $('.nav_box').addClass('nav_on');
          //스크롤의 거리가 350px 이상이면 서브메뉴 고정
          $('#headerArea').hide();
          $('.nav_box li').removeClass('before'); // 내가 추가
      }else{
          $('.nav_box').removeClass('nav_on');
          //스크롤의 거리가 350px 보다 작으면 서브메뉴 원래 상태로
          $('.nav_box ul li').addClass('before'); // 내가 추가
          $('#headerArea').show();
      }
      
      
      
      $('.slide_menu li').find('a').removeClass('spy');
      //모든 서브메뉴 비활성화~ 불꺼!!!
      
      
       //스크롤의 거리의 범위를 처리
      if(scroll>=780 && scroll<=2250){
          $('.slide_menu li:eq(0)').find('a').addClass('spy');
          //첫번째 서브메뉴 활성화
          
      }else if(scroll>=2251 && scroll<=3119){
          $('.slide_menu li:eq(1)').find('a').addClass('spy');
          //두번째 서브메뉴 활성화

      }else if(scroll>=3120){
          $('.slide_menu li:eq(2)').find('a').addClass('spy');
          //세번째 서브메뉴 활성화

      }
      
      
  });


});