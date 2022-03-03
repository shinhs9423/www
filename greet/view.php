<? 
	session_start(); 
		@extract($_POST);
    @extract($_GET);
    @extract($_SESSION);

    //세션변수
    //view.php?num=7&page=1

	include "../lib/dbconn.php";

	$sql = "select * from greet where num=$num";
	$result = mysql_query($sql, $connect);

    $row = mysql_fetch_array($result);       
      // 하나의 레코드 가져오기
	
	$item_num     = $row[num];
	$item_id      = $row[id];
	$item_name    = $row[name];
	$item_nick    = $row[nick];
	$item_hit     = $row[hit];

	$item_date    = $row[regist_day];

	$item_subject = str_replace(" ", "&nbsp;", $row[subject]);

	$item_content = $row[content];
	$is_html      = $row[is_html];

	if ($is_html!="y")
	{
		// 바꾸었던 태그를 html로 바꿔주기 위해
		$item_content = str_replace(" ", "&nbsp;", $item_content);
		$item_content = str_replace("\n", "<br>", $item_content);
	}	

	$new_hit = $item_hit + 1;

	$sql = "update greet set hit=$new_hit where num=$num";   // 글 조회수 증가시킴
	mysql_query($sql, $connect);
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
	<link rel="stylesheet" href="./css/view.css">
	<script>
    function del(href) // delete.php?=num=7
    {
        if(confirm("한번 삭제한 자료는 복구할 방법이 없습니다.\n\n정말 삭제하시겠습니까?")) {
                document.location.href = href;
        }
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
            <i class="fas fa-home"><span class="hidden">home</span></i> &gt; 홍보센터 &gt; <strong>공지사항</strong>
          </div>
          <h2>공지사항</h2>
          <p><span>공지사항</span>을 <span>안내</span>드립니다</p>
				</div> <!--end of title_area_box-->
      </div> <!--end of title_area-->

		<div class="content_area">

			<dl>
				<dt><?= $item_subject ?></dt>
				<dt><span>작성자 : <?= $item_nick ?> | 조회 : <?= $item_hit ?> | 작성일 : <?= $item_date ?></span></dt>
				<dd>
					<?= $item_content ?>
				</dd>
			</dl>

			<div class="btn_area">


				<ul>
					<li>
						<a href="list.php?page=<?=$page?>&scale=<?=$scale?>">목록</a>
					</li>
					<? 
					if($userid==$item_id || $userlevel==1 || $userid=="admin") {  // (유저아이디=세션변수)  == (아이템아이디=글쓴아이디) && 관리자 권한 && 관리자아이디
					?>
					<li>
						<a href="modify_form.php?num=<?=$num?>&page=<?=$page?>">수정</a>
					</li>
					<li>
						<a href="javascript:del('delete.php?num=<?=$num?>')">삭제</a>
					</li>
					<?
						}
					?>
					<? 
						if($userid) { //로그인이 되었으면
					?>
					<li>
						<a href="write_form.php">글쓰기</a>
					</li>
					<?
						}
					?>
				</ul>
			</div> <!--end of btn_area-->

		</div> <!-- end of content_area -->

	</article> <!--end of article-->

	<? include "../common/sub_footer.html" ?>

</body>
</html>