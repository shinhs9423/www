  $(document).on('mouseenter','#load ul a',function(e){
    e.preventDefault();
    $(this).parent('li').css('marginTop','100px'); 
  })
  
  $(document).on('mouseleave','#load ul a',function(e){
    e.preventDefault();
    $(this).parent('li').css('marginTop','150px'); 
    
  })
  $(document).on('click','#load ul a',function(e){
    e.preventDefault();
    var ind=$(this).parents('li').index();

    if ( ind == '0' ) {
      $(this).parents('ul').children('li').first().appendTo('#load ul');
      $(this).parents('ul').children('li').css('marginTop','150px');
    } else {
    
      $(this).parents('ul').children('li').first().appendTo('#load ul');
      
      $(this).parents('li').last().prependTo('#load ul');
      $(this).parents('ul').children('li').css('marginTop','150px');

    }
  })