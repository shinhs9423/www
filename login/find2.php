<?
   session_start();
?>
    <meta charset="UTF-8">
<?
  @extract($_GET); 
  @extract($_POST); 
  @extract($_SESSION); 
  /*
$id='green2'
$name='홍길동'
$hp1='010'
$hp2='1111'
$hp3='2222'
  */


   if(!$id) {  /* !='없으면'*/
     echo("
          <span style='color:red;'>아이디를 입력하세요</span>
         ");
         exit;
   }

   if(!$name) {  /* !='없으면'*/
     echo("
          <span style='color:red;'>이름을 입력하세요</span>
         ");
         exit;
   }

   if(!($hp2 && $hp3)) {
     echo("
          <span style='color:red;'>연락처를 입력하세요</span>
         ");
         exit;
   }


   include "../lib/dbconn.php";

   $sql = "select * from member where id='$id'";
   $result = mysql_query($sql, $connect); //있으면 1, 없으면 null

   $num_match = mysql_num_rows($result);  //1 null

   if(!$num_match) //검색 레코드가 없으면
   {
     echo(" 
          <span style='color:red;'>등록되지 않은 아이디 입니다.</span>
         ");
    exit;
    }
    else     //검색 레코드가 있으면
    {
         $hp = $hp1."-".$hp2."-".$hp3;
        
		     $row = mysql_fetch_array($result); 
          //$row[id] ,.... $row[level]
         $sql ="select * from member where id='$id' and name='$name' and hp='$hp'";
         $result = mysql_query($sql, $connect);
         $num_match = mysql_num_rows($result); //있으면 1, 없으면 null
     
  /* db에 이미 암호화 된 pass를 다시 암호화해서 기존의 pass로 알아낼수 없다,
  암호화된 pass가 입력된 pass의 암호화와 일치하는가를 확인해야함*/

        if(!$num_match) //null이면=입력된 pass가 암호화된 패스와 맞지 않다면
        {
           echo("
              <span style='color:red;'>일치하는 회원 정보가 존재하지 않습니다</span>
           ");

           exit;
        }
        else  //1이면=아이디와 이름 전화번호가 모두 일치 한다면
        {
           $userid = $row[id];
           $username = $row[name];
           $userhp = $row[hp];
           $date = $row[regist_day];

        function generateRandomPassword($length=8, $strength=0) {
            $vowels = 'aeuy';
            $consonants = 'bdghjmnpqrstvz';  //랜덤으로 뽑아낼 기본 문자
            if ($strength & 1) {
                $consonants .= 'BDGHJLMNPQRSTVWXZ';  //추가할 문자
            }

            $password = '';
            $alt = time() % 2;
            for ($i = 0; $i < $length; $i++) {  
                if ($alt == 1) {
                    $password .= $consonants[(rand() % strlen($consonants))];
                    $alt = 0;
                } else {
                    $password .= $vowels[(rand() % strlen($vowels))];
                    $alt = 1;
                }
            }
            
            return $password;  //임시패스워드
        }

        $ranpass = generateRandomPassword(8,1);  //랜덤으로 뽑은 8자의 문자
            
        echo "
            <span style='font-weight:bold;'>$username</span>님의 임시비밀번호가 발급됐습니다.<br>
            임시비밀번호 : <strong> $ranpass </strong><br>
            로그인 후 비밀번호를 변경해주세요.";
            
        $sql = "update member set pass=password('$ranpass') where id='$id' and name='$name' and hp='$hp'";
        $result = mysql_query($sql, $connect);
        }
        
        
   }          
?>
