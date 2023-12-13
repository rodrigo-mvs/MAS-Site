$(document).ready(function(){
    $(".dropbtn").click(function(){
      $(this).next(".dropdown-content").slideToggle("fast");
    });
  });