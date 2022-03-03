<?
   function latest_article($table, $loop, $subject_limit, $content_limit) // 테이블명, 출력 리스트 개 수, 제목 length
   {
		 //lasted_article("greet",5,10,30);
		include "dbconn.php";

		$sql = "select * from $table order by num desc limit $loop";
		$result = mysql_query($sql, $connect);

		echo "<ul>";
		while ($row = mysql_fetch_array($result))
		{
			$num = $row[num];
			$len_subject = mb_strlen($row[subject], 'utf-8');  //한글을 1자로 처리(byte처리)
			$subject = $row[subject];
			
			$len_content = mb_strlen($row[content], 'utf-8');  //한글을 1자로 처리(byte처리)
			$content = $row[content];

			if ($len_subject > $subject_limit) //제한글자수(30) 보다 크면
			{
				// $subject = str_replace( "&#039;", "'", $subject);               
				$subject = mb_substr($subject, 0, $subject_limit, 'utf-8');
				$subject = $subject."...";
			}

			if ($len_content > $content_limit) //제한글자수(30) 보다 크면
			{
				// $subject = str_replace( "&#039;", "'", $subject);               
				$content = mb_substr($content, 0, $content_limit, 'utf-8');
				$content = $content."...";
			}



			$regist_day = substr($row[regist_day], 0, 10); //2022-02-28

			if($table=='concert'){  // 첨부된 이미지가 있으면...
				if($row[file_copied_0]){
					$concertimg='./concert/data/'.$row[file_copied_0]; //파일 경로
				} else {  // 없으면 default
					$concertimg= './concert/data/default.jpg';
				}
			}

			if($table=='greet'){ 

			echo "      
				<li>
					<a href='./$table/view.php?table=$table&num=$num'>
						<dl>
							<dt>$subject</dt>
							<dd>
								$content
								<span>[$regist_day]</span>
							</dd>
						</dl>
					</a>
				</li>
			";

			} else if($table=='concert') {

				echo "      
				<li>
					<a href='./$table/view.php?table=$table&num=$num'>
						<img src='$concertimg' alt='$subjuect 이미지'>
						<dl>
							<dt>$subject</dt>
							<dd>
								$content
								<span>[$regist_day]</span>
							</dd>
						</dl>
					</a>
				</li>
				";  

			}
		}

		echo "</ul>";

		mysql_close();
	}
?>