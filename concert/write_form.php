<? 
	session_start(); 
    @extract($_POST);
    @extract($_GET);
    @extract($_SESSION);
    //새글쓰기 =>  $table
		//수정 = > $table, $num, $page, $mode

	$table = "concert"; 

	include "../lib/dbconn.php";

	if ($mode=="modify") //수정 글쓰기면
	{
		$sql = "select * from $table where num=$num";
		$result = mysql_query($sql, $connect);

		$row = mysql_fetch_array($result);       
	
		$item_subject     = $row[subject];
		$item_content     = $row[content];

		$item_file_0 = $row[file_name_0];
		$item_file_1 = $row[file_name_1];
		$item_file_2 = $row[file_name_2];

		$copied_file_0 = $row[file_copied_0];
		$copied_file_1 = $row[file_copied_1];
		$copied_file_2 = $row[file_copied_2];
	}
?>

<!DOCTYPE html>
<html lang="ko">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>현대로템-보도자료</title>
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous">
	<link rel="stylesheet" href="../common/css/common.css">
	<link rel="stylesheet" href="../sub4/common/css/sub4common.css">
	<link rel="stylesheet" href="./css/write.css">
	<script>
		function check_input() {
			if (!document.board_form.subject.value)
			{
					alert("제목을 입력하세요!");    
					document.board_form.subject.focus();
					return;
			}

			if (!document.board_form.content.value)
			{
					alert("내용을 입력하세요!");    
					document.board_form.content.focus();
					return;
			}
			document.board_form.submit();
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
			<li><a href="../greet/list.php">공지사항</a></li>
			<li class="current"><a href="../concert/list.php">보도자료</a></li>
		</ul>
	</div>

	<article id="content">
		<div class="title_area">
				<div class="title_area_box">
					<div class="line_map">
						<i class="fas fa-home"><span class="hidden">home</span></i> &gt; 투자정보 &gt; <strong>공지사항</strong>
					</div>
					<h2>공지사항</h2>
					<p><span>공지사항</span>을 <span>안내</span>드립니다</p>
				</div> <!--end of title_area_box-->
			</div> <!--end of title_area-->

		<div class="content_area">


		<?
			if($mode=="modify") {//수정 글쓰기
		?>
				<form  name="board_form" method="post" action="insert.php?mode=modify&num=<?=$num?>&page=<?=$page?>&table=<?=$table?>" enctype="multipart/form-data"> 
		<?
			} else { //새글이면
		?>
				<form  name="board_form" method="post" action="insert.php?table=<?=$table?>" enctype="multipart/form-data"> 
		<?
			}
		?>
	<dl>
				<dt><label class="hidden" for="subject">제목</label><input type="text" name="subject"  placeholder="제목을 입력해주세요" value="<?=$item_subject?>"></dt>
				<dt>
					<?
						if( $userid && ($mode != "modify") ) {
					?>
					<input type="checkbox" name="html_ok" value="y">HTML작성 
					<?
						}
					?>
					<span>작성자 : <?= $usernick ?></span></dt>
				<dd>
					<label class="hidden" for="content">본문 내용</label>
					<textarea rows="15" name="content" placeholder="본문 내용을 입력해주세요"><?=$item_content?></textarea>
				</dd>
			</dl>
			<div class="image_box">
				<ul>
					<li>
						<p><label for="upfile[]">이미지1</label></p>
						<input type="file" name="upfile[]" class="up_file" id="upFile1">
						<?
							if ($mode=="modify" && $item_file_0) {
						?>
							<p>기존파일 : <?=$item_file_0?></p>
							<p><label for="del_file[]">기존 이미지 삭제</label><input type="checkbox" name="del_file[]" value="0"></p>
							<img src="./data/<?=$copied_file_0?>" alt="이미지 미리보기">
						<?
							}
						?>
					</li>
					<li>
						<p><label for="upfile[]">이미지2</label></p>
						<input type="file" name="upfile[]" class="up_file" id="upFile2">
						<?
							if ($mode=="modify" && $item_file_1) {
						?>
							<p>기존파일 : <?=$item_file_1?></p>
							<p><label for="del_file">기존 이미지 삭제</label><input type="checkbox" name="del_file[]" value="1"></p>
							<img src="./data/<?=$copied_file_1?>" alt="이미지 미리보기">
						<?
							}
						?>
					</li>
					<li>
						<p><label for="upfile[]">이미지3</label></p>
						<input type="file" name="upfile[]" class="up_file" id="upFile3">
						<?
							if ($mode=="modify" && $item_file_2) {
						?>
							<p>기존파일 : <?=$item_file_2?></p>
							<p><label for="del_file[]">기존 이미지 삭제</label><input type="checkbox" name="del_file[]" value="2"></p>
							<img src="./data/<?=$copied_file_2?>" alt="이미지 미리보기">
						<?
							}
						?>
					</li>
				</ul>
			</div>
			<div class="btn_area">
				<ul>
					<li>
						<a href="#" onclick="check_input()">등록</a>
					</li>
					<li>
						<a href="list.php?table=<?=$table?>&page=<?=$page?>&scale=<?=$scale?>">목록</a>
					</li>
				</ul>
			</div> <!--end of btn_area-->
		</div> <!--end of content_area-->
		
	</article> <!--end of article-->

	<? include "../common/sub_footer.html" ?>

</body>
</html>
