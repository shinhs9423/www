<?
  session_start();
  @extract($_POST);
  @extract($_GET);
  @extract($_SESSION);
?>

<meta charset="utf-8">
<?
  include "../lib/dbconn.php";       // dconn.php 파일을 불러옴

  $sql ="select * from member where id='$id' and pass=password('$pass')";
  $result = mysql_query($sql, $connect);
  $num_match = mysql_num_rows($result);

  if(!$num_match)  //적은 패스워드와 디비 패스워드가 같지않을때
  {
    echo("
      <script>
        window.alert('비밀번호가 일치하지않습니다.');
        history.go(-1);
        // document.member_form.pass.focus();
      </script>
    ");
    exit;
  }
  else    // 입력 pass 와 테이블에 저장된 pass 일치한다.
  { 
    // 회원 탈퇴 로직 

    unset($_SESSION['userid']);       //세션변수 삭제
    unset($_SESSION['username']);
    unset($_SESSION['usernick']);
    unset($_SESSION['userlevel']);

    $sql = "delete from member where id='$id' and pass=password('$pass')";
    mysql_query($sql, $connect);  // $sql 에 저장된 명령 실행
    


    echo("
      <script>
        alert('회원탈퇴가 완료됐습니다.');
        location.href = '../index.html';
      </script>
    ");
    
  }


  mysql_close(); 

?>