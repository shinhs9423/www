
$(document).ready(function () {

  var options = {
    'legend':{
      names: ['2016', '2017', '2018','2019']
        },
    'dataset':{
      title:'재무상태현황 그래프', 
      values: [[44732,30060,14672], [40839,26656,14183],[40021,28942,11079],[40929,31833,8829]],
      colorset: ['#DC143C','#FF8C00', '#2EB400'],
      fields:['자산', '부채', '자본']
    },
    'chartDiv' : 'chart1',
    'chartType' : 'line',
    'leftOffsetValue': 50,
    'bottomOffsetValue': 60,
    'chartSize' : {width:700, height:300},
    'minValue' : 0,
    'maxValue' : 50000,
    'increment' : 10000
  };

  Nwagon.chart(options);
})