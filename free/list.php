<?
session_start();
@extract($_POST);
@extract($_GET);
@extract($_SESSION);

$table = "free";
$ripple = "free_ripple";
?>

<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>현대로템-자유게시판</title>
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous">
	<link rel="stylesheet" href="../common/css/common.css">
	<link rel="stylesheet" href="../sub4/common/css/sub4common.css">
	<link rel="stylesheet" href="./css/greet.css">
	<?
	include "../lib/dbconn.php";
	$scale = 10;			// 한 화면에 표시되는 글 수

	if ($mode == "search") {
		if (!$search) {
			echo ("
					<script>
					window.alert('검색할 단어를 입력해 주세요!');
						history.go(-1);
					</script>
				");
			exit;
		}
		$sql = "select * from $table where $find like '%$search%' order by num desc";
	} else {
		$sql = "select * from $table order by num desc";
	}

	$result = mysql_query($sql, $connect);
	$total_record = mysql_num_rows($result); // 전체 글 수

	// 전체 페이지 수($total_page) 계산 
	if ($total_record % $scale == 0)
		$total_page = floor($total_record / $scale);
	else
		$total_page = floor($total_record / $scale) + 1;

	if (!$page)                 // 페이지번호($page)가 0 일 때
		$page = 1;              // 페이지 번호를 1로 초기화

	// 표시할 페이지($page)에 따라 $start 계산  
	$start = ($page - 1) * $scale;
	$number = $total_record - $start;
	?>
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
				<p><span>공지사항</span>을 <span>안내</span>드립니다</p>
			</div>
			<!--end of title_area_box-->
		</div>
		<!--end of title_area-->

		<div class="content_area">
			<form name="board_form" method="post" action="list.php?table=<?= $table ?>&mode=search">
				<div class="list_wrap">
					<div class="list_header">
						<p>▷ 총 : <?= $total_record ?> 개의 게시물이 있습니다.</p>
						<div class="scale_wrap">
							<label for="scale" class="hidden">보기</label>
							<select name="scale" onchange="location.href='list.php?scale='+this.value">
								<option value=''>보기</option>
								<option value='5'>5</option>
								<option value='10'>10</option>
								<option value='15'>15</option>
								<option value='20'>20</option>
							</select>
						</div>
						<!--end of scale_wrap-->
						<div class="search_wrap">
							<label class="hidden" for="find">카테고리</label>
							<select name="find">
								<option value='subject'>제목</option>
								<option value='content'>내용</option>
								<option value='nick'>작성자</option>
								<!-- <option value='name'>아이디</option> -->
							</select>
							<label class="hidden" for="search">검색어</label>
							<input type="text" name="search">
							<label for=""></label>
							<input type="submit" value="검색">
						</div> <!-- end of search_wrap -->
					</div> <!-- end of list_header -->
					<div class="list_con">
						<table>
							<caption class="hidden">게시물 목록</caption>
							<colgroup>
								<col width="10%">
								<col width="40%">
								<col width="20%">
								<col width="10%">
								<col width="10%">
							</colgroup>
							<thead>
								<tr>
									<th>번호</th>
									<th>제목</th>
									<th>작성자</th>
									<th>작성일</th>
									<th>조회</th>
								</tr>
							</thead>
							<tbody>
								<?
								for ($i = $start; $i < $start + $scale && $i < $total_record; $i++) {
									mysql_data_seek($result, $i); // 가져올 레코드로 위치(포인터) 이동  
									$row = mysql_fetch_array($result); // 하나의 레코드 가져오기

									$item_num     = $row[num];
									$item_id      = $row[id];
									$item_name    = $row[name];
									$item_nick    = $row[nick];
									$item_hit     = $row[hit];
									$item_date    = $row[regist_day];
									$item_date = substr($item_date, 0, 10);  //2022-02-21 [시분초 삭제하고 가져오기]
									$item_subject = str_replace(" ", "&nbsp;", $row[subject]); // 스페이스바를 태그로 바꿔서 처리해주기

									// 리플 추가 1 시작
									$sql = "select * from $ripple where parent=$item_num";   //게시글의 프라이머리 키
									$result2 = mysql_query($sql, $connect);     // 
									$num_ripple = mysql_num_rows($result2);     // 해당 게시글의 댓글 수
									// 리플추가 1 종료

								?>
									<!-- 닉네임 링크주고, 클릭이벤트 게시글 보기 -->
									<tr>
										<td><?= $number ?></td>
										<td><a href="view.php?num=<?= $item_num ?>&page=<?= $page ?>&scale=<?= $scale ?>"><?= $item_subject ?></a></td>
										<?
										// 리플 추가 시작
										if ($num_ripple)               // 리플이 있으면
											echo " [$num_ripple]";     // 리플 개수 작성
										//리플 추가 종료
										?>
										<td><?= $item_nick ?></td>
										<td><?= $item_date ?></td>
										<td><?= $item_hit ?></td>
									</tr>
								<?
									$number--;
								}
								?>
							</tbody>
						</table>
						<div class="btn_area">
							<div class="list_page_btn">
								<i class="fas fa-caret-left"><span class="hidden">이전</span></i>
								<?
								// 게시판 목록 하단에 페이지 링크 번호 출력
								for ($i = 1; $i <= $total_page; $i++) {
									if ($page == $i) {    // 현재 페이지 번호 링크 안함
										echo "<strong> $i </strong>";
									} else {
										if ($mode == "search") {
											echo "<a href='list.php?page=$i&scale=$scale&mode=search&find=$find&search=$search'> $i </a>";
										} else {
											echo "<a href='list.php?page=$i&scale=$scale'> $i </a>";
										}
									}
								}
								?>
								<i class="fas fa-caret-right"><span class="hidden">다음</span></i>
							</div> <!-- end of list_page_btn -->

							<ul>
								<li>
									<a href="list.php?page=<?= $page ?>&scale=<?= $scale ?>">목록</a>
								</li>

								<?
								if ($userid) { //로그인이 되었으면
								?>
									<li>
										<a href="write_form.php">글쓰기</a>
									</li>
								<?
								}
								?>
							</ul>
						</div>
						<!--end of btn_area-->
					</div>
					<!--end of list_con -->
				</div>
				<!--end of list_wrap-->
			</form>
		</div>
		<!--end of content_area-->

		<? include "../common/sub_footer.html" ?>
</body>

</html>