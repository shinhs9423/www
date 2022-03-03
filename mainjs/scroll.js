document.addEventListener("DOMContentLoaded", function () {
    


     //스크롤의 좌표가 변하면.. 스크롤 이벤트
    $(window).on('scroll',function(){
        var scroll = $(window).scrollTop();
        //스크롤top의 좌표를 담는다
       
        $('.text').text(scroll);
        //스크롤 좌표의 값을 찍는다.
        
        

        //스크롤의 거리의 범위를 처리
        if(scroll>=500 && scroll<1400){
            $('#content div.company').addClass('boxMove');

            
        }else if(scroll>=1400 && scroll<3200){

             $('#content div.business').addClass('boxMove');
        }else if(scroll>=3200 && scroll<4100){

             $('#content div.management').addClass('boxMove');
        }else if(scroll>=4100 && scroll>4200){
            
             $('#content div.notice').addClass('boxMove');
        }
    });


});