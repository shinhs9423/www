<meta charset="utf-8">
<?
   
   @extract($_POST);
   @extract($_GET);
   @extract($_SESSION);
    //$id='a';

   if(!$id) {
      echo("아이디를 입력하세요.");
   }
   else {
      include "../lib/dbconn.php";

      $sql = "select * from member where id='$id' ";

      $result = mysql_query($sql, $connect);
      $num_record = mysql_num_rows($result);


      if ($num_record)
      {

         echo "<span style='color:red'>이미 사용중인 아이디 입니다.</span>";
      }
      else
      {
         echo "<span style='color:#0a2267;'>사용가능한 아이디 입니다.</span>";
      }


      mysql_close();
   }

?>

