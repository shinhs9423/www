<? 
	session_start(); 
		@extract($_POST);
    @extract($_GET);
    @extract($_SESSION);
?>

<!DOCTYPE html>
<html lang="ko">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>현대로템-공지사항</title>
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous">
	<link rel="stylesheet" href="../common/css/common.css">
	<link rel="stylesheet" href="../sub4/common/css/sub4common.css">
	<link rel="stylesheet" href="./css/write.css">
	<script>
		function insert_submit() {
			document.getElementById('insert').submit();
		}
	</script>
		
</head>
<body>
<? include "../common/sub_header.html" ?>

<!-- visual -->
	<div class="visual">
		<img src="../sub4/common/images/visual.jpg" alt="비주얼이미지">
		<h3>홍보센터</h3>
	</div>

	<!-- sub-menu -->
	<div class="sub_menu">
		<ul>
			<li class="current"><a href="./list.php">공지사항</a></li>
			<li><a href="../concert/list.php">보도자료</a></li>
		</ul>
	</div>

	<article id="content">
		<div class="title_area">
			<div class="title_area_box">
				<div class="line_map">
					<i class="fas fa-home"><span class="hidden">home</span></i> &gt; 투자정보 &gt; <strong>공지사항</strong>
				</div>
				<h2>공지사항</h2>
				<!-- <p><span>공지사항</span>을 <span>안내</span>드립니다</p> -->
			</div> <!--end of title_area_box-->
		</div> <!--end of title_area-->

		<div class="content_area">

		<form name="board_form" method="post" action="insert.php" id="insert">

			<dl>
				<dt><label class="hidden" for="subject">제목</label><input type="text" name="subject" placeholder="제목을 입력해주세요"></dt>
				<dt><input type="checkbox" name="html_ok" value="y">HTML작성 <span>작성자 : <?= $usernick ?></span></dt>
				<dd>
					<label class="hidden" for="content">본문 내용</label>
					<textarea rows="15" name="content" placeholder="본문 내용을 입력해주세요"></textarea>
				</dd>
			</dl>

			<div class="btn_area">
				<ul>
					<li>
						<a href="#" onclick="insert_submit()">등록</a>
					</li>
					<li>
						<a href="list.php?page=<?=$page?>">목록</a>
					</li>
				</ul>
			</div> <!--end of btn_area-->
		</div> <!--end of content_area-->
		
	</article> <!--end of article-->

	<? include "../common/sub_footer.html" ?>

</body>
</html>


