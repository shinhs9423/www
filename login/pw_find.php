<?
	session_start();
    @extract($_GET); 
    @extract($_POST); 
    @extract($_SESSION);  
?>

<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>현대로템-비밀번호찾기</title>
    <link rel="stylesheet" href="../common/css/common.css">
    <link rel="stylesheet" href="./css/find.css">
    <script src="https://kit.fontawesome.com/f8a0f5a24e.js" crossorigin="anonymous"></script>
    <script src="../common/js/jquery-1.12.4.min.js"></script>
    <script src="../common/js/jquery-migrate-1.4.1.min.js"></script>
    <script>
        $(document).ready(function() {

            $(".find").click(function() {    // id입력 상자에 id값 입력시
                var id = $('.find_id').val(); //green2
                var name = $('.find_name').val(); //홍길동
                var hp1 = $('#hp1').val(); 
                var hp2 = $('#hp2').val(); 
                var hp3 = $('#hp3').val(); 

                $.ajax({
                    type: "POST",
                    url: "find2.php", /*매개변수인 check_id.php파일을 post방식으로 넘기세요*/
                    data: "id="+ id+ "&name="+ name+ "&hp1="+hp1+ "&hp2="+hp2+ "&hp3="+hp3,  /*매개변수id도 같이 넘겨줌*/
                    cache: false, 
                    success: function(data) /*이 메소드가 완료되면 data라는 변수 안에 echo문이 들어감*/
                    {
                        $("#loadtext").html(data); /*span안에 있는 태그를 사용할것이기 때문에 html 함수사용*/
                    }
                });
                
            $("#loadtext").addClass('loadtexton');     
            }); 

        });
    </script>
</head>
<body>
    <div id="wrap">
        <header>
			<h1><a href="../index.html">현대로템</a></h1>
		</header>

        <article id="content">
            <ul class="tab">
                <li><a href="./id_find.php">아이디 찾기</a></li>
                <li class="current"><h2><a href="./pw_find.php">비밀번호 찾기</a></h2></li>
            </ul>
            <form name="find" method="post" action="find2.php"> 
                <div class="id_box">
                    <h3>
                        <label class="hidden" for="id">아이디</label>
                    </h3>
                    <input type="text" name="id" class="find_input find_id" placeholder="아이디">
                </div>

                <div class="name_box">
                    <h3>
                        <label class="hidden" for="name">이름</label>
                    </h3>
                    <input type="text" name="name" class="find_input find_name" id="name" placeholder="이름">
                </div>
                <div class="hp_box">
                    <h3>
                        <label class="hidden" for="hp1">핸드폰</label>
                    </h3>
                    <select name="hp1" id="hp1" title="휴대폰 앞3자리를 선택하세요." class="find_input">
                        <option>010</option>
                        <option>011</option>
                        <option>016</option>
                        <option>017</option>
                        <option>018</option>
                        <option>019</option>
                    </select>
                    <span>-</span>
                    <label class="hidden" for="hp2">연락처 가운데3자리</label>
                    <input class="find_input" type="text" id="hp2" name="hp2" maxlength="4" placeholder="6543">
                    <span>-</span>
                    <label class="hidden" for="hp3">연락처 마지막3자리</label>
                    <input class="find_input" type="text" id="hp3" name="hp3" maxlength="4" placeholder="1234">
                </div>

                <input type="button" value="비밀번호 찾기" class="find">

                <div id="loadtext"></div>

                <ul>
                    <li><a href="./login_form.php">로그인</a></li>
                    <li><a href="../member/member_check.html">회원가입</a></li>
                </ul>

            </form>
        </article>
    </div> <!-- end of wrap -->
</body>
</html>
