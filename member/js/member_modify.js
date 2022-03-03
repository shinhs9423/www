function check_id()
{
  window.open("check_id.php?id=" + document.member_form.id.value,
      "IDcheck",
       "left=200,top=200,width=250,height=100,scrollbars=no,resizable=yes");
}

function check_name()
{
  window.open("check_name.php?name=" + document.member_form.name.value,
      "NAMEcheck",
       "left=200,top=200,width=250,height=100,scrollbars=no,resizable=yes");
}

function check_nick()
{
  window.open("../member/check_nick.php?nick=" + document.member_form.nick.value,
      "NICKcheck",
       "left=200,top=200,width=250,height=100,scrollbars=no,resizable=yes");
}

function check_input()
{

   if (!document.member_form.pass.value)
   {
       alert("비밀번호를 입력하세요");    
       document.member_form.pass.focus();
       return;
   }

   if (!document.member_form.pass_confirm.value)
   {
       alert("비밀번호확인을 입력하세요");    
       document.member_form.pass_confirm.focus();
       return;
   }

//    if (!document.member_form.name.value)
//    {
//        alert("이름을 입력하세요");    
//        document.member_form.name.focus();
//        return;
//    }

   if (!document.member_form.nick.value)
   {
       alert("닉네임을 입력하세요");    
       document.member_form.nick.focus();
       return;
   }

   if (!document.member_form.hp2.value || !document.member_form.hp3.value )
   {
       alert("휴대폰 번호를 입력하세요");    
       document.member_form.nick.focus();
       return;
   }

   if (document.member_form.pass.value != 
         document.member_form.pass_confirm.value)
   {
       alert("비밀번호가 일치하지 않습니다.\n다시 입력해주세요.");    
       document.member_form.pass.focus();
       document.member_form.pass.select();
       return;
   }

   document.member_form.submit();
}

function reset_form()
{
  //  document.member_form.id.value = "";
   document.member_form.pass.value = "";
   document.member_form.pass_confirm.value = "";
//    document.member_form.name.value = "";
   document.member_form.nick.value = "";
   document.member_form.hp1.value = "010";
   document.member_form.hp2.value = "";
   document.member_form.hp3.value = "";
   document.member_form.email1.value = "";
   document.member_form.email2.value = "";
 
   document.member_form.pass.focus();

   return;
}

$(document).ready(function () {
            
  //nick 중복검사		 
  $("#nick").keyup(function () {    // id입력 상자에 id값 입력시
      var nick = $('#nick').val();

      $.ajax({
          type: "POST",
          url: "check_nick.php",
          data: "nick=" + nick,
          cache: false,
          success: function (data) {
              $("#loadtext2").html(data);
          }
      });
  });

   //비밀번호 검사
   $("#pass, #pass_confirm").keyup(function () {    // id입력 상자에 id값 입력시
      var pass1 = $('#pass').val();
      var pass2 = $('#pass_confirm').val();

      $.ajax({
          type: "POST",
          url: "check_pass.php",
          data: {
              pass1 : pass1,
              pass2 : pass2,
          },
          cache: false,
          success: function (data) {
              $("#loadtext3").html(data);
          }
      });
  });
});