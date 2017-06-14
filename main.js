function main() { 
$(function main() { 
$(".div2").hide();
$(".html").hide();
$(".html").fadeIn(1000);
$(".topbar").hide();
$(".topbar").fadeIn(2500);
$(".topbar").on('click', function() { 
    $(".topbar").hide(1000);
  });
$(".changepage").on('click', function() { 
   $(".div1").slideToggle(1000);
   $(".div2").slideToggle(1000);
   $(".topbar").hide(1000);
  });
}
$(document).ready(main);
