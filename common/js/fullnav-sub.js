
$(document).ready(function () {

    var smh = $('.visual').height();  //비주얼 이미지의 높이를 리턴한다   900px
    var on_off = false;  //false(안오버)  true(오버)  


    $('#headerArea').mouseenter(function () {
        $(this).css('background', '#fff');
        $('.dropdownmenu li h3 a').css('color', '#333');
        $('#headerArea .top_menu a').css('color','#333'); //top_menu 글씨 변경
        $('#headerArea h1 a').css('background','url(../common/images/header_logo_02.png)');

        on_off = true;
    });

    $('#headerArea').mouseleave(function () {
        var scroll = $(window).scrollTop();  //스크롤의 거리

        if (scroll >= 0 && scroll < smh - 300) { //스크롤이 내려가지 않았을 때
            $(this).css('background', 'none').css('border-bottom', 'none');
            $('.dropdownmenu li h3 a').css('color', '#fff');
            $('#headerArea .top_menu a').css('color','#fff');
            $('#headerArea h1 a').css('background','url(../common/images/header_logo_01.png)');
        } else if (scroll > smh - 300) { //스크롤이 내려갔을 때
            $(this).css('background', '#fff');
            $('.dropdownmenu li h3 a').css('color', '#333');
            $('#headerArea .top_menu a').css('color','#333');
            $('#headerArea h1 a').css('background','url(../common/images/header_logo_02.png)');
        }
        on_off = false;
    });

    $(window).on('scroll', function () {//스크롤의 거리가 발생하면
        var scroll = $(window).scrollTop();  //스크롤의 거리를 리턴하는 함수
        //console.log(scroll);

        if (scroll > smh - 300) {//스크롤300까지 내리면
            $('#headerArea').css('background', '#fff').css('box-shadow', '4px 4px 6px 4px rgba(3,3,3,.1)');
            $('.dropdownmenu li h3 a').css('color', '#333');
            $('#headerArea .top_menu a').css('color','#333');
            $('#headerArea h1 a').css('background','url(../common/images/header_logo_02.png');
        } else {//스크롤 내리기 전 디폴트(마우스올리지않음)
            if (on_off == false) {
                $('#headerArea').css('background', 'none').css('box-shadow', 'none');
                $('.dropdownmenu li h3 a').css('color', '#fff');
                $('#headerArea .top_menu a').css('color','#fff');
                $('#headerArea h1 a').css('background','url(../common/images/header_logo_01.png');
            }
        };
    });

    
    //2depth 열기/닫기
    $('ul.dropdownmenu').hover(
        function () {
            $('ul.dropdownmenu li.menu ul').fadeIn('normal', function () { $(this).stop(); }); //모든 서브를 다 열어라
            $('#headerArea').animate({ height: 370 }, 'fast').clearQueue();
            $(this).css('border-bottom', '2px solid #0a2267')
        }, function () {
            $('ul.dropdownmenu li.menu ul').hide(); //모든 서브를 다 닫아라
            $('#headerArea').animate({ height: 150 }, 'fast').clearQueue();
            $(this).css('border-bottom', 'none')
        });

    //1depth 효과
    $('ul.dropdownmenu li.menu').hover(
        function () {
            $('.depth1', this).css('color', '#0a2267');
        }, function () {
            $('.depth1', this).css('color', '#333');
        });


    //tab 처리
    $('ul.dropdownmenu li.menu .depth1').on('focus', function () {
        $('ul.dropdownmenu li.menu ul').slideDown('normal');
        $('#headerArea').animate({ height: 370 }, 'fast').clearQueue();
    });

    $('ul.dropdownmenu li.m6 li:last').find('a').on('blur', function () {
        $('ul.dropdownmenu li.menu ul').slideUp('fast');
        $('#headerArea').animate({ height: 150 }, 'normal').clearQueue();
    });
});
