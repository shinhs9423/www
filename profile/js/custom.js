$(document).ready(function () {

	//변수 ht에 브라우저의 높이값을 저장
	var ht = $(window).height();
	var screen_width = $(window).width(); //너비 추가됨

		//브라우저가 리사이즈 될 때마다 브라우저와 section의 높이값을 갱신
		$(window).on("resize", function () {
			ht = $(window).height();
			$("section").height(ht);
		});


	//메뉴 버튼 클릭시
	$("#menu li").on("click", function (e) {
		e.preventDefault();

		//변수 ht에 브라우저의 높이값 저장
		var ht = $(window).height();

		//변수 i에 현재 클릭한 li의 순서값을 저장
		var i = $(this).index(); // 0 1 2 3

		//브라우저의 높이값*박스의 순서값은 현재 박스의 스크롤 위치값과 동일
		var nowTop = i * ht;

		//해당 스크롤 위치값으로 문서를 이동
		$("html,body").stop().animate({ "scrollTop": nowTop }, 1400);
	});

	if (screen_width > 768) {
		//브라우저의 높이값을 section의 높이값으로 지정
		$("section").height(ht);
		//$("section").css('height',ht);


		$(window).on("scroll", function () {
			//변수 ht에 현재 브라우저의 넓이값 저장
			var ht = $(window).height();
	
			//변수 scroll에 현재 문서가 스크롤된 거리 저장
			var scroll = $(window).scrollTop();
	
			for (var i = 0; i < 8; i++) {
				if (scroll >= ht * i && scroll < ht * (i + 1)) {
					$("#menu li").removeClass();
					$("#menu li").eq(i).addClass("on");
				};
			}
		});


		//section위에서 마우스 휠을 움직이면
		$("section").on("mousewheel", function (event, delta) {

			//마우스 휠을 올렸을때	
			if (delta > 0) {
				//변수 prev에 현재 휠을 움직인 section에서 이전 section의 offset().top위치 저장
				var prev = $(this).prev().offset().top;
				//문서 전체를 prev에 저장된 위치로 이동
				$("html,body").stop().animate({ "scrollTop": prev }, 'slow');
				return false;
				//마우스 휠을 내렸을때	 
			} else if (delta < 0) {
				//변수 next에 현재 휠을 움직인 section에서 다음 section의 offset().top위치 저장
				var next = $(this).next().offset().top;
				//문서 전체를 next에 저장된 위치로 이동
				$("html,body").stop().animate({ "scrollTop": next }, 'slow');
				return false;
			}
		});
	} 


	// 인덱스 타이핑
		var el       = document.querySelector('.index_text')
		var options  = {
			text: '<h1>포기하지 않는 끈질긴 개발자 한승현 입니다.</h1>',
		textSpeed: 95,
		blinkSpeed: 0.06
		}
		var instance = new tinytyper(el, options);



	// 동전 돌리기
	var cntCoin = 0;
		$('#btnCoin').on('click',function(){
			var deg = cntCoin*360;
			$(this).children('img').css({'transform':'rotateY('+deg+'deg)'});
			cntCoin++;
			
			// coin tries 되면!
			if (cntCoin == 3) {alert('소중한 기회를 주셔서 감사합니다 :)');}

			if (cntCoin == 5) {alert('조금만 더 힘내세요!');}
			
			if (cntCoin == 7) {
				var answer = confirm('숨겨진 조건을 달성하였습니다! 채용 우선권을 획득하시겠습니까?');
				if(answer == true) {
					$("html,body").stop().animate({ "scrollTop": ht }, 'slow');
				} else {
					confirm('포트폴리오를 확인 후 재도전 해주세요!');
				}
			}
			
			
			$(this).children('span').children('em').text(cntCoin);

		});


	// showman device change
	$('.showman .control_panel a').on('click',function(e){
		e.preventDefault();
		var index = $(this).parent('li').index();

		$('.showman .device').children('li').hide();
		$('.showman .device').children('li').eq(index).fadeIn('fast');
	});


	// mobile scoll event
	var mobile_scroll=0;
	$("section.mobile .frame").on("mousewheel", function (event, delta) {
		var mobile_screen_height =  $('section.mobile .frame img').height() - $('section.mobile .frame').height();
		//마우스 휠을 올렸을때	
		if (delta > 0) {
			if (mobile_scroll != 0) {
				mobile_scroll += 10;
				$('section.mobile .frame img').css({"top" : mobile_scroll +"px"});
			}
			return false;
		//마우스 휠을 내렸을때	 
		} else if (delta < 0) {
			if (mobile_scroll*-1 <= mobile_screen_height+100) {
				mobile_scroll -= 10;
				$('section.mobile .frame img').css({"top" : mobile_scroll +"px"});
			}
			return false;
		}
	});


	// bootstrap event
	var device_num=1;
	var bootstrap_scroll=0;
	var device_screen_height;
	var boot_index=1;
	var max;
	// 디바이스 체인지
	$('.bootstrap .control_panel a').on('click',function(e){
		e.preventDefault();
		max = $('.bootstrap .control_panel ul li').length;

		boot_index = $(this).parent('li').index();

		$('.bootstrap .device').children('li').hide();
		$('.bootstrap .device').children('li').eq(boot_index).fadeIn('fast');

		if (boot_index==0) {device_num=0;}
		if (boot_index==1) {device_num=1;}
		if (boot_index==2) {device_num=2;}

		for (let i = 0; i< max; i++ ) {
			$('.bootstrap li:eq('+i+') > .frame > img').css({"top" : "0"});
		}
		bootstrap_scroll=0;
	});

		// scoll event
		$("section.bootstrap .device img").on("mousewheel", function (event, delta) {
			if (device_num == 0)  { device_screen_height = 2870; }
			if (device_num == 1)  { device_screen_height = 2860; }
			if (device_num == 2)  { device_screen_height = 1780; }
			
			//마우스 휠을 올렸을때	
			if (delta > 0) {
				if (bootstrap_scroll != 0) {
					bootstrap_scroll += 10;
					$('.bootstrap li:eq('+boot_index+') > .frame > img').css({"top" : bootstrap_scroll +"px"});
				}
				return false;
			//마우스 휠을 내렸을때	 
			} else if (delta < 0) {
				if (bootstrap_scroll*-1 <= device_screen_height) {
					bootstrap_scroll -= 10;
					$('.bootstrap li:eq('+boot_index+') > .frame > img').css({"top" : bootstrap_scroll +"px"});
				}
				return false;
			}
		});

	// wordpress event
		var wordpress_index;

		var wordpress_scroll=0;
		var max_height = 1790;
	// 디바이스 체인지
	$('.wordpress .control_panel a').on('click',function(e){
		e.preventDefault();

		wordpress_index = $(this).parent('li').index();

		
		// 이미지 교체
		$('.wordpress .img_box>img').attr('src','./img/wordpress_screen_'+wordpress_index+'.jpg');
		wordpress_scroll = 0;
		$('.wordpress .img_box>img').css({"top" : wordpress_scroll +"px"});

	});

	// scoll event
	$("section.wordpress .frame").on("mousewheel", function (event, delta) {

		if (wordpress_index == 0)  { max_height = 1780; }
		if (wordpress_index == 1)  { max_height = 1170; }
		if (wordpress_index == 2)  { max_height = 920; }
		if (wordpress_index == 3)  { max_height = 1330; }
		if (wordpress_index == 4)  { max_height = 680; }
		
		//마우스 휠을 올렸을때	
		if (delta > 0) {
			if (wordpress_scroll < 0) {
				wordpress_scroll += 20;
				$('.wordpress .img_box>img').css({"top" : wordpress_scroll +"px"});
			}
			return false;
		//마우스 휠을 내렸을때	 
		} else if (delta < 0) {
			if (wordpress_scroll*-1 <= max_height) {
				wordpress_scroll -= 20;
				$('.wordpress .img_box>img').css({"top" : wordpress_scroll +"px"});
			}
			return false;
		}
	});

});










