$(document).ready(function () {

   //슬라이드 메뉴 클릭시 해당 콘텐츠로 스스륵~~~ 이동
   $('.slide_menu a').click(function (e) { 
      e.preventDefault(); //href="#" 속성을 막아주는..메소드

      var value = 0; //이동할 스크롤의 거리

      if ($(this).hasClass('link1')) {   //첫번째 메뉴를 클릭했냐?   if($(this).is('#link1')){
         value = $('#content .con1').offset().top-$('#headerArea').height()-30;  // 해당 콘테츠의 상단의 거리~~
      } else if ($(this).hasClass('link2')) {
         value = $('#content .con2').offset().top-$('#headerArea').height()-30; // top - 헤더 높이 를 하여 헤더아래로 가려지지 않도록 할 수 있다.
      } else if ($(this).hasClass('link3')) {
         value = $('#content .con3').offset().top-$('#headerArea').height()-30;
      } 
      // else if ($(this).hasClass('link4')) {
      //    value = $('#content .con4').offset().top-$('#headerArea').height()-30;
      // } else if ($(this).hasClass('link5')) {
      //    value = $('#content .con5').offset().top-$('#headerArea').height()-30;
      // }

      $("html,body").stop().animate({ "scrollTop": value }, 1000);
   });
});

// <script src="../common/js/slide_move.js"></script>
// 1. 사용할 html에 연결
// 2. a 태그에 에 class="link $" 부여
// 3. a 태그 경로 지정
// 4. 컨텐츠에  class="con $" 부여