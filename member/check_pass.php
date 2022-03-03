<meta charset="utf-8">
<?
   @extract($_POST);
   @extract($_GET);
   @extract($_SESSION);

   if($pass1 != $pass2) 
   {
      echo "<span style='color:red'>비밀번호가 일치하지 않습니다.</span>";
   } else {
      echo "<span style='color:#0a2267;'>비밀번호가 일치합니다.</span>";
   }
?>

