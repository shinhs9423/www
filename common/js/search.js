document.addEventListener("DOMContentLoaded", function () {

  
  var $display = document.getElementById('searchForm').style.display;
  $display = 'none';

  function open_close_search () {
    if ($display == 'none') {
      $('#searchForm').slideDown('fast');
      $display = 'block';

    } else if ($display != 'none') {
      $('#searchForm').slideUp('slow');
      $display = 'none';

    }
  }

  function check_search () {
    if (!document.board_form.search.value)
    {
      alert("검색어를 입력하세요!");    
      document.board_form.search.focus();
      return;
    }
    document.board_form.submit();
  }
});