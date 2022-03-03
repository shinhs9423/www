// JavaScript Document

$(document).ready(function(){
    var cnt=2;  //탭메뉴 개수 ***
    $('.tabs .cont_list').hide(); // 모든 탭 숨겨라
    $('.tabs .cont_list:eq(0)').show(); // 첫번째 탭 내용만 열어라
    $('.tabs .tab1').css('color','#fff','border').css('backgroundColor','#0a2267').css('borderColor','#0a2267'); //첫번째 탭메뉴 활성화
               //자바스크립트의 상대 경로의 기준은 => 스크립트 파일을 불러들인 html파일이 저장된 경로 기준***
    
    $('.tabs .tab').each(function (index) {  // index=0 1 2
      $(this).click(function(e){
          e.preventDefault();   // <a> href="#" 값을 강제로 막는다    

          $(".tabs .cont_list").hide(); //모든 탭내용을 안보이게...
          $(".tabs .cont_list:eq("+index+")").show(); //클릭한 해당 탭내용만 보여라
          $('.tab').css('color','#ccc').css('fontWeight','300').css('backgroundColor',''); //모든 탭메뉴를 비활성화
          $(this).css('color','#fff').css('fontWeight','700').css('backgroundColor', '#0a2267'); // 클릭한 해당 탭메뉴만 활성화

     });
    });

  });

