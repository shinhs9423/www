<?
    // 로컬 db
    $connect=mysql_connect( "localhost", "www", "1234") or  
        die( "SQL server에 연결할 수 없습니다."); 

    mysql_select_db("www_db",$connect);

    // 서버 db
    // $connect=mysql_connect( "localhost", "shinhs9423", "tmdgus1212") or  
    // die( "SQL server에 연결할 수 없습니다."); 

    // mysql_select_db("shinhs9423",$connect);
?>
