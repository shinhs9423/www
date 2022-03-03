
var xhr = new XMLHttpRequest();                 // XMLHttpRequest 객체를 생성한다.

xhr.onload = function() {                       // When readystate changes

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }


출처: https://fruitdev.tistory.com/160 [과일가게 개발자]
  // if(xhr.status === 200) {                      // If server status was ok
    responseObject = JSON.parse(xhr.responseText);  //서버로 부터 전달된 json 데이터를 responseText 속성을 통해 가져올 수 있다.
	                                                 // parse() 메소드를 호출하여 자바스크립트 객체로 변환한다.

    var newContent = '';
    
    newContent += '<h3>연도별 차트</h3>';
    newContent += '<p>(단위:만원)</p>';
    newContent += '<table>';
    newContent += '<thead>';
    newContent += '<tr class="row1">';
    newContent += '<th scope="col">' + '구분' + '</th>';
    newContent += '<th scope="col">' + '매출액' + '</th>';
    newContent += '<th scope="col">' + '매출원가' + '</th>';
    newContent += '<th scope="col">' + '영업이익' + '</th>';
    newContent += '<th scope="col">' + '기타수익' + '</th>';
    newContent += '<th scope="col">' + '기타비용' + '</th>';
    newContent += '<th scope="col">' + '단기순이익' + '</th>';
    newContent += '</tr>';
    newContent += '</thead>';
    newContent += '<tbody>';


    for (var i = 0; i < responseObject.incomeTable.length; i++) { 
      var $sales = numberWithCommas(responseObject.incomeTable[i].sales);
      var $cost = numberWithCommas(responseObject.incomeTable[i].cost);
      var $profit = numberWithCommas(responseObject.incomeTable[i].profit);
      var $otherIn = numberWithCommas(responseObject.incomeTable[i].otherIn);
      var $otherOut = numberWithCommas(responseObject.incomeTable[i].otherOut);
      var $income = numberWithCommas(responseObject.incomeTable[i].income);

      newContent += '<tr>';
      newContent += '<th scope="row">' + responseObject.incomeTable[i].year + '</th>';
      newContent += '<td>' + $sales + '</td>';
      newContent += '<td>' + $cost + '</td>';
      newContent += '<td>' + $profit + '</td>';
      newContent += '<td>' + $otherIn + '</td>';
      newContent += '<td>' + $otherOut + '</td>';
      newContent += '<td>' + $income + '</td>';
      newContent += '</tr>';
    }
    
    newContent += '</tbody>';
    newContent += '</table>';

    document.getElementById('load').innerHTML = newContent;

  // }
};

xhr.open('GET', './data/table.json', true);        // 요청을 준비한다.
xhr.send(null);  