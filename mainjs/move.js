// JavaScript Document

$(document).ready(function() {

    var timeonoff;   //타이머 처리  홍길동 정보
    var imageCount=5;   //이미지 총개수
    var cnt=1;   //이미지 순서 1 2 3 4 5 1 2 3 4 5....(주인공!!=>현재 이미지 순서)
    var onoff=true; // true=>타이머 동작중 , false=>동작하지 않을때
    
    $('.visual .btn1').css('background','#0a2267'); //첫번째 불켜
    $('.visual .btn1').css('width','30'); // 버튼의 너비 증가
    
    $('.visual .gallery .link1').fadeIn('slow'); //첫번째 이미지 보인다..
    $('.visual .gallery a span').hide(); //
    $('.visual .gallery .link1 span').slideDown('slow'); //첫번째 이미지 보인다..
 
    function moveg(){
      cnt++;  //카운트 1씩 증가.. 5가되면 다시 초기화 0  1 2 3 4 5 1 2 3 4 5..
     
    //  for(var i=1;i<=imageCount;i++){
    //         $('.gallery .link'+i).hide(); //모든 이미지를 보이지 않게.
    //  }
    
     $('.visual .gallery li').hide(); //모든 이미지를 보이지 않게.
     $('.visual .gallery .link'+cnt).fadeIn('slow'); //자신만 이미지가 보인다..
     $('.visual .gallery a span').hide(); //자신만 이미지가 보인다..
     $('.visual .gallery a span').slideDown('slow'); //자신만 이미지가 보인다..
	 		                    
    //  for(var i=1;i<=imageCount;i++){
    //       $('.btn'+i).css('background','#00f'); //버튼불다꺼!!
    //      $('.btn'+i).css('width','16'); // 버튼 원래의 너비
    //   }
      
      $('.visual .mbutton').css('background','rgba(230,230,230,1'); //버튼불다꺼!!
      $('.visual .mbutton').css('width','16'); // 버튼 원래의 너비
      $('.visual .btn'+cnt).css('background','#0a2267');//자신만 불켜
      $('.visual .btn'+cnt).css('width','30');    

       if(cnt==imageCount)cnt=0;  //카운트의 초기화 0
     }
     
    timeonoff= setInterval( moveg , 4000);// 타이머를 동작 1~5이미지를 순서대로 자동 처리
      //var 변수 = setInterval( function(){처리코드} , 4000);  //홍길동의 정보를 담아놓는다
      //clearInterval(변수); -> 살인마/사이코패스/살인청부업자


   $('.visual .mbutton').click(function(event){  //각각의 버튼 클릭시
	     var $target=$(event.target); //클릭한 버튼 $target == $(this)
       clearInterval(timeonoff); //타이머 중지     
	 
	    //  for(var i=1;i<=imageCount;i++){
	    //      $('.gallery .link'+i).hide(); //모든 이미지 안보인다.
      //    } 
	    $('.visual .gallery li').hide(); //모든 이미지 안보인다.

		  if($target.is('.btn1')){  //첫번째 버튼 클릭??
				 cnt=1;  //클릭한 해당 카운트를 담아놓는다
		  }else if($target.is('.btn2')){  //두번째 버튼 클릭??
				 cnt=2; 
		  }else if($target.is('.btn3')){ 
				 cnt=3; 
		  }else if($target.is('.btn4')){
				 cnt=4; 
		  }else if($target.is('.btn5')){
				 cnt=5; 
		  } 

		  $('.visual .gallery .link'+cnt).fadeIn('slow');  //자기 자신만 이미지가 보인다
		  
		  // for(var i=1;i<=imageCount;i++){
			//   $('.btn'+i).css('background','#00f'); //버튼 모두불꺼
      //   $('.btn'+i).css('width','16');
		  // }
      $('.visual .mbutton').css('background','rgba(230,230,230,1'); //버튼 모두불꺼
      $('.visual .mbutton').css('width','16');
      $('.visual .btn'+cnt).css('background','#0a2267');//자신 버튼만 불켜 
      $('.visual .btn'+cnt).css('width','30');
      
      if(cnt==imageCount)cnt=0;  //카운트 초기화
     
      timeonoff= setInterval( moveg , 4000); //타이머의 부활!!!
     
      if(onoff==false){ //중지상태냐??
            onoff=true; //동작~~
            $('.visual .ps').css('color','rgba(230,230,230,1');
      }
      
    });



	 //stop/play 버튼 클릭시 타이머 동작/중지
  $('.visual .ps').click(function(){ 
     if(onoff==true){ // 타이머가 동작 중이냐??
	       clearInterval(timeonoff);   //살인마 고용 stop버튼 클릭시
		     $(this).css('color','#0a2267'); //js파일에서는 경로의 기준이 html파일이 기준!!
         onoff=false;   
	   }else{  // false 타이머가 중지 상태냐??
		   timeonoff= setInterval( moveg , 4000); //play버튼 클릭시  부활
		   $(this).css('color','rgba(230,230,230,1)');
		   onoff=true; 
	   }
  });	


});




