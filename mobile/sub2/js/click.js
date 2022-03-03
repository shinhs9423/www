$(document).ready(function () {
  $(document).on('click','.con_list:eq(1) ul:eq(0) a',function(e){
    e.preventDefault();
    console.log('cilck');
    var ind=$(this).parents('li').index();
    console.log(ind);

    // $('.con_list:eq(1) ul:eq(1)').children('li:eq('+ind+')').siblings().slideUp('slow');
    $('.con_list:eq(1) ul:eq(1)').children('li').slideUp('slow');
    $('.con_list:eq(1) ul:eq(1)').children('li:eq('+ind+')').slideDown('slow');

  });
});