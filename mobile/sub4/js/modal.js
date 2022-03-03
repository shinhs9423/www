document.addEventListener("DOMContentLoaded", function(){
  
  $(document).on('click','.modal_list li a',function(e){
    e.preventDefault();
    // console.log('cilck');
    var ind=$(this).parents('li').index();
    console.log(ind);

    $('.modal_overlay').fadeIn('slow');
    $('.modal_window').children('li:eq('+ ind+')').siblings().hide();
    $('.modal_window').children('li:eq('+ ind+')').fadeIn('slow');

  });

  $(document).on('click','.modal_overlay a',function(e){
    e.preventDefault();

    $('.modal_overlay').fadeOut('fast');

  });
});
  
