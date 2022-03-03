
var xhr = new XMLHttpRequest();                 // XMLHttpRequest 객체를 생성한다.

xhr.onload = function() {                       // When readystate changes
 
  //if(xhr.status === 200) {                      // If server status was ok
    responseObject = JSON.parse(xhr.responseText);  //서버로 부터 전달된 json 데이터를 responseText 속성을 통해 가져올 수 있다.
	                                                 // parse() 메소드를 호출하여 자바스크립트 객체로 변환한다.

    var newContent = '';
    
    newContent += '<ul class="staff_box">';

    for (var i = 0; i < responseObject.staff.length; i++) { 
      newContent += '<li> <a href="#">';
      newContent += '<img src="./images/content1/' + responseObject.staff[i].pic + '" alt="' + responseObject.staff[i].name + '사진">';
      newContent += '<dl>';
      newContent += '<dt>' + responseObject.staff[i].name + '</dt>';
      newContent += '<dd>' + '<span>' + '직급 :' + '</span>' + responseObject.staff[i].rank + '</dd>';
      newContent += '<dd>' + '<span>' + '선임 :' + '</span>' + responseObject.staff[i].date + '</dd>';
      newContent += '<dd>' + '<span>' + '임기 :' + '</span>' + responseObject.staff[i].term + ' 년</dd>';
      newContent += '<dt>' + '주요경력' + '</dt>';

      if (responseObject.career[i].incumbent == "") {

      } else {
        newContent += '<dd>'+ '(현)' + responseObject.career[i].incumbent +'</dd>';
      }
      newContent += '<dd>'+ '(전)'+ responseObject.career[i].former +'</dd>';
      newContent += '</dl>';
      newContent += '</a></li>';
    }
    newContent += '</ul>';

    document.getElementById('load').innerHTML = newContent;

};



xhr.open('GET', './data/staff.json', true);        // 요청을 준비한다.
xhr.send(null);  


