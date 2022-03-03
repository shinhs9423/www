document.addEventListener("DOMContentLoaded", function () {
    


     //스크롤의 좌표가 변하면.. 스크롤 이벤트
    $(window).on('scroll',function(){
        var scroll = $(window).scrollTop();

        //스크롤top의 좌표를 담는다
       
     //    console.log(scroll);
        //스크롤 좌표의 값을 찍는다.
        
        

        //스크롤의 거리의 범위를 처리
        if(scroll>=300 && scroll<350){
          $('.content_area .title_wrap ul').children('li:eq(0)').addClass('box_move');

        }else if(scroll>=500 && scroll<550){

          $('.content_area .title_wrap ul').children('li:eq(1)').addClass('box_move');
        }else if(scroll>=700 && scroll<750){

          $('.content_area .title_wrap ul').children('li:eq(2)').addClass('box_move');
        }else if(scroll>=1000 && scroll>1050){
            
          $('.content_area .title_wrap ul').children('li:eq(3)').addClass('box_move');
        }
    });


});