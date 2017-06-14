function main() { 
$(".html").hide();
$(".html").fadeIn(1000);
$(".topbar").hide();
$(".topbar").fadeIn(2500);
$(".topbar").on('click', function() { 
    //$(".topbar").fadeOut(1000);
    $(".topbar").hide(1000);
  });
}
$(document).ready(main);
