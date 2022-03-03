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
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>현대로템-로그인</title>
	<link rel="stylesheet" href="../common/css/common.css">
	<link rel="stylesheet" href="./css/login.css">
</head>
<body>
	<div class="wrap">

		<header class="hidden">
			<h1>현대로템</h1>
		</header>

		<article id="content">

			<div class="left_box">
				<h2 class="hidden">로그인 영역</h2>
				<a href="../index.html"><img src="../common/images/header_logo_02_01.png" alt="현대로템 로고"></a>
				<form id="formLogin" name="member_form" method="post" action="login.php"> 
			
					<div id="id_pw_input">
						<ul>
							<li>
								<label class="hidden" for="id">아이디</label>
								<input type="text" name="id" id="id" class="login_input" placeholder="아이디">
							</li>
							<li>
								<label class="hidden" for="pass">비밀번호</label>
								<input type="password" name="pass" id="pass" class="login_input" placeholder="비밀번호">
							</li>
						</ul>

						<ul class="forget">
							<li><a href="./id_find.php">id 찾기</a></li>
							<li><a href="./pw_find.php">password 찾기</a></li>
						</ul>

					</div> <!-- end of id pw-->

					<input type="submit" value="로그인">
					<!-- <a href="#" onclick="return chk_form()">로그인</a> -->
				

				
				</form>
			
			<!-- 아이디/비번찾기 -->

			</div> <!-- end of left_box-->

			<div class="right_box">
				<h2 class="hidden">회원가입영역</h2>
				<p><span>C</span>limate Smart</p>
				<p><span>R</span>esponsible Partner</p>
				<p><span>G</span>reen Innovation</p>
				<p>현대로템에 방문해주셔서</p>
				<p>감사합니다</p>

				<a href="../member/member_check.html">회원가입</a>
				
			<!-- 회원가입 -->
			</div> <!--end of right_box-->
			
			</div> <!--end of wrap-->
		</article>

		<script>
			function chk_form() {
				if (document.getElementById('id').value==''){
					alert('아이디를 입력하세요');
					return false;
				}
				if (document.getElementById('pass').value==''){
					alert('비밀번호를 입력하세요');
					return false;
				}
				document.getElementById('formLogin').submit();
			}
		</script>

</body>
</html>


