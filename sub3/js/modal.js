
$(document).ready(function() {

  $('.pop_menu a').click(function(e){
    e.preventDefault();
    var ind=$(this).parents('li').index();
    
    $('.modal_box').fadeIn('slow');

    $('.modal_box .pop_box').children().hide();
    $('.modal_box .pop_box').children().eq(ind).show();
    $('.modal_box .pop_box').children('.pop_close').show();



  })
  
  
  $('.modal_box .pop_close').click(function(e) {
    e.preventDefault();

    $('.modal_box').fadeOut('fast');
  })

})