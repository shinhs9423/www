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
    <title>현대로템-회원탈퇴</title>
    <link rel="stylesheet" href="../common/css/common.css">
    <link rel="stylesheet" href="./css/member_form.css">
    <script src="../common/js/jquery-1.12.4.min.js"></script>
    <script src="../common/js/jquery-migrate-1.4.1.min.js"></script>
    <?
        
        include "../lib/dbconn.php";

        $sql = "select * from member where id='$userid'";
        $result = mysql_query($sql, $connect);

        $row = mysql_fetch_array($result);

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
            <h2>회원탈퇴</h2>
            <p>탈퇴를 원하시면 아래 내용을 입력해주세요</p>
            <form id="member_drop" name="member_drop" method="post" action="member_drop.php">
                <ul>
                    <li>
                        <h3>
                            <label for="id">아이디</label>
                        </h3>
                        <strong> <?= $row[id] ?> </strong>
                        <input class="hidden" type="text" name="id" id="id" required placeholder="아이디" value="<?= $row[id] ?>">
                    </li>
                    <li>
                        <h3>
                            <label for="pass">비밀번호</label>
                        </h3>
                        <input type="password" name="pass" id="pass" required placeholder="비밀번호">
                    </li>
                </ul>

                <div class="notice">
                    <p>회원탈퇴 시 기존 정보는 즉시 삭제됩니다.</p>
                </div>

                <a href="#" onclick="chk_drop()" class="drop_btn">탈퇴하기</a>
            </form>
        </article>
        <script>
            function chk_drop() {
				if (document.getElementById('pass').value==''){
					alert('비밀번호를 입력하세요');
					return false;
				}
				document.getElementById('member_drop').submit();
			}
        </script>
    </div>
</body>
</html>
<!-- 
    <script>
        function drop_member () {
            console.log('click');
            
            if (confirm('회원 정보가 삭제됩니다. 정말 탈퇴하시겠습니까?')==true) {
                pass = <? 
                echo "
                prompt('비밀번호를 입력하면 탈퇴됩니다.');
                "
                ?>

                if (pass!=$pass) { // 패스워드가 일치하지 않으면
                    //컨티뉴
                    console.log('패스워드가 잘못됐습니다');
                    continue;
                } else { // 패스워드 일치하면
                    //계정삭제
                        console.log('pass');
                        console.log('$pass');

                }
            } else {
                alert('회원탈퇴가 취소 됐습니다.');
            }
        }
    </script>
    <?
        //변수 받기

        //함수 만들기


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
    ?> -->
