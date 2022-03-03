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
    <title>현대로템-회원정보수정</title>
    <link rel="stylesheet" href="../common/css/common.css">
    <link rel="stylesheet" href="./css/member_form.css">
    <script src="../common/js/jquery-1.12.4.min.js"></script>
    <script src="../common/js/jquery-migrate-1.4.1.min.js"></script>
    <script src="./js/member_modify.js"></script>
<?
    // $userid='aaa';  //세션변수 아이디
    
    include "../lib/dbconn.php";

    $sql = "select * from member where id='$userid'";
    $result = mysql_query($sql, $connect);

    $row = mysql_fetch_array($result);
    //$row[id]....$row[level] 아이디 ~ 레벨 까지 넘겨온 세션 변수

    $hp = explode("-", $row[hp]);  //000-0000-0000
    $hp1 = $hp[0];
    $hp2 = $hp[1];
    $hp3 = $hp[2];

    $email = explode("@", $row[email]);
    $email1 = $email[0];
    $email2 = $email[1];

    mysql_close();
?>

</head>
<body>
    <div class="wrap">
        <header>
            <h1>
                <a href="../index.html">현대로템</a>
            </h1>
        </header>

        <article id="content">

            <h2>회원정보수정</h2>
            <p><span>*</span>은 필수 정보 입니다.</p>
            <form  name="member_form" method="post" action="modify.php"> 

                <ul>
                    <li>
                        <h3>
                            <label for="id">아이디<span class="necessary">*</span></label>
                        </h3>
                        <strong> <?= $row[id] ?> </strong>
                    </li>

                    <li>
                        <h3>
                            <label for="pass">비밀번호<span class="necessary">*</span></label>
                        </h3>
                        <input type="password" name="pass" id="pass" required placeholder="비밀번호">
                    </li>

                    <li>
                        <h3>
                        <label for="pass_confirm">비밀번호 확인<span class="necessary">*</span></label>
                        </h3>
                        <input type="password" name="pass_confirm" id="pass_confirm" required placeholder="비밀번호 확인">
                        <div id="loadtext3"></div>
                    </li>

                    <li>
                        <h3>
                        <label for="name">이름<span class="necessary">*</span></label>
                        </h3>
                        <strong> <?= $row[name] ?> </strong>
                    </li>

                    <li>
                        <h3>
                        <label for="nick">닉네임<span class="necessary">*</span></label>
                        </h3>
                        <input type="text" name="nick" id="nick" required value="<?= $row[nick] ?>">
                        <div id="loadtext2"></div>
                    </li>

                    <li>
                        <h3>
                        <label for="hp1">휴대폰<span class="necessary">*</span></label>
                        </h3>
                        <div class="ph_input">
                        <select class="hp" name="hp1" id="hp1" value="<?= $hp1 ?>">
                            <option value='010'>010</option>
                            <option value='011'>011</option>
                            <option value='016'>016</option>
                            <option value='017'>017</option>
                            <option value='018'>018</option>
                            <option value='019'>019</option>
                        </select>
                        <span>-</span><label class="hidden" for="hp2">전화번호중간4자리</label><input type="text" class="hp" name="hp2" id="hp2" required value="<?= $hp2 ?>">
                        <span>-</span><label class="hidden" for="hp3">전화번호끝4자리</label><input type="text" class="hp" name="hp3" id="hp3" required value="<?= $hp3 ?>">
                        </div>
                    </li>

                    <li>
                        <h3>
                        <label for="email1">이메일아이디</label>
                        </h3>
                        <div class="email_area">
                        <input type="text" id="email1" name="email1" required value="<?= $email1 ?>">
                        <span>@</span>
                        <label class="hidden" for="email2">이메일주소</label>
                        <input type="text" name="email2" id="email2" required value="<?= $email2 ?>">
                        </div>
                    </li>
                </ul>



                <ul class="btn_area">
                    <li>
                        <a href="#" onclick="check_input()">저장하기</a>
                    </li>
                    <li>
                        <a href="./member_form_modify.php">다시쓰기</a>
                    </li>
                    <li>
                        <a href="./member_form_drop.php">회원탈퇴</a>
                    </li>
                </ul>
            </form>

        </article>
    </div>

</body>
</html>


