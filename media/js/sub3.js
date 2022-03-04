$(document).ready(function () {

    var screenSize = $(window).width();
    var screenHeight = $(window).height();

    $("#content").css('margin-top', screenHeight);

    if (screenSize > 768) {
        $('.videoBox img').attr('src', 'images/sub3/sub_bg_01.jpg');
    }
    if (screenSize <= 768) {
        $('.videoBox img').attr('src', 'images/sub3/sub_bg_02.jpg');
    }

    $(window).resize(function () {
        screenSize = $(window).width();
        screenHeight = $(window).height();

        $("#content").css('margin-top', screenHeight);

        if (screenSize > 768) {
            $('.videoBox img').attr('src', 'images/sub3/sub_bg_01.jpg');
        }
        if (screenSize <= 768) {
            $('.videoBox img').attr('src', 'images/sub3/sub_bg_02.jpg');
        }
        $resize();
    });

    $('.down').click(function () {
        screenHeight = $(window).height();
        $('html,body').animate({ 'scrollTop': screenHeight }, 1000);
    });


    // 유튜브 팝업

    $('.popup-youtube').magnificPopup({
        disableOn: 320,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: true,

        fixedContentPos: false
    });


    // cd 너비 == 높이 맞추기
    var cd_width = $('music_list li a:eq(0)').height();

    var $resize = function() {
        for (let i = 0; i < cnt; i++) {
            var $val = $('.music_list li a:eq(' + i + ')').width();
            $('.music_list li a:eq(' + i + ')').css('height', $val);
        }
        cd_width = $val;
        console.log('resizing');
        console.log($val);
        console.log(cd_width);
    }

    $(document).ready($resize);


    // 가사 높이 맞추기

    function $resize_li () {
        for (let i = 0; i < cnt; i++) {
            var $val = $('.view_box img').height();
            $('.lyrics_box li').css('height', $val);
        }
    }
    $(document).ready($resize_li);
    $(window).resize($resize_li);

    // player 관련

    var cnt = 5; //총 개수
    var view_boxImg = 1;
    var view_lyrics = true;

    function backwardBtn(e) {
        e.preventDefault();

        for (let i = 0; i < cnt; i++) {  //모든 오디오 멈춰
            var j = i + 1;
            var $audio = document.getElementById('audio' + j);
            $audio.pause();
        }
        $('.music_list li a').removeClass('playing'); //모든 회전 멈춰

        $('.music_list li').last().prependTo('.music_list'); // cd 순서


        $('.lyrics_box li').hide(); // 가사 숨겨
        view_lyrics = false;
        $('.lyrics_box li').last().prependTo('.lyrics_box'); // 가사 순서 변경
        $('.lyrics_box li:eq(0)').show(); // 가사 보여
        view_lyrics = true;

        if (view_boxImg == 1) { view_boxImg = cnt; } else { view_boxImg--; }; // 이미지 순서 뽑기
        $('.view_box img').attr('src', './audio/music_0' + view_boxImg + '.jpg'); //이미지 바꿔라
        $resize(); //resize
        $resize_li();
        playMusic(e);
    }

    function forwardBtn(e) {
        e.preventDefault();

        for (let i = 0; i < cnt; i++) {  //모든 오디오 멈춰
            var j = i + 1;
            var $audio = document.getElementById('audio' + j);
            $audio.pause();
        }
        $('.music_list li a').removeClass('playing'); //모든 회전 멈춰

        $('.music_list li').first().appendTo('.music_list'); // cd 순서


        $('.lyrics_box li').hide(); //가사 숨겨
        view_lyrics = false;
        $('.lyrics_box li').first().appendTo('.lyrics_box'); // 가사 순서 변경
        $('.lyrics_box li:eq(0)').show();// 가사 보여
        view_lyrics = true;

        if (view_boxImg == cnt) { view_boxImg = 1; } else { view_boxImg++; }; // 이미지 순서 뽑기
        $('.view_box img').attr('src', './audio/music_0' + view_boxImg + '.jpg'); //이미지 바꿔라
        $resize(); //resize
        $resize_li();
        playMusic(e);
    }

    function viewLyrics(e) {
        e.preventDefault();
        if (view_lyrics == true) {
            $('.lyrics_box li:eq(0)').hide();// 가사 숨겨
            view_lyrics = false;
        } else if (view_lyrics == false) {
            $('.lyrics_box li:eq(0)').show();// 가사 보여
            view_lyrics = true;
        }
    }

    function pauseMusic(e) {
        e.preventDefault();

        $('.music_list li a').removeClass('playing'); //모든 회전 멈춰
        var $audio = document.getElementById('audio' + view_boxImg); //변수로 담아
        $audio.pause(); // 오디오 멈춰
    }

    function playMusic(e) {
        e.preventDefault();

        var $audio = document.getElementById('audio' + view_boxImg); //변수로 담아
        $audio.play(); // 오디오 재생
        $('.music_list li:eq(0) a').addClass('playing'); // 회전 시작

        setInterval (function (){
            
            if($audio.ended == true) {
                $('.music_list li a').removeClass('playing'); //모든 회전 멈춰
                clearInterval();
            } 
        }, 1000);
    
    }

    document.getElementById('backBtn').addEventListener("click", backwardBtn);
    document.getElementById('forBtn').addEventListener("click", forwardBtn);
    document.getElementById('playBtn').addEventListener("click", playMusic);
    document.getElementById('pauseBtn').addEventListener("click", pauseMusic);
    document.getElementById('viewBtn').addEventListener("click",viewLyrics);

    // cd 선택
    $('.music_list a').click(function (e) {
        e.preventDefault();

        var idx = $(this).parents('li').index();

        if (idx == 0) {
            playMusic(e);
        } else {
            for (let i = 0; i < idx; i++) {
                forwardBtn(e);
            }
            var $audio = document.getElementById('audio' + view_boxImg); //변수로 담아

            $audio.play(); // 오디오 재생
            $('.music_list li:eq(0) a').addClass('playing'); // 회전 시작
        }
    })

    // hover 넣기
    $('.music_list li').mouseenter(function(){
        $(this).siblings('li').css('webkitFilter',' grayscale(100%)').css('filter','gray');
        $(this).children('a').css('box-shadow','0 0 6px 4px rgba(255,255,255,.5)');
        $(this).children('a').css('webkitFilter',' grayscale(0)').css('filter','none');
    })

    $('.music_list li').mouseleave(function(){
        $(this).siblings('li').css('webkitFilter',' grayscale(0)').css('filter','none');
        $(this).children('a').css('box-shadow','0 0 6px 4px rgba(255,255,255,0)');
    })
});