<?
   session_start();
    @extract($_POST);
    @extract($_GET);
    @extract($_SESSION);
    //$num (글번호 / 프라이머리 키) 받아 온다

   include "../lib/dbconn.php";

   $sql = "delete from greet where num = $num";
   mysql_query($sql, $connect);

   mysql_close();

   echo "
	   <script>
	    location.href = 'list.php';
	   </script>
	";
?>

