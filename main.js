alert("If ONLY this pops up, then JS may not be working");
function main() { 
    alert("If this pops up, JS is on!");
$(".html").hide();
$(".html").fadeIn(1000);
$(".topbar").hide();
$(".topbar").fadeIn(2500);
$(".topbar").on('click', function() { 
    $(".topbar").fadeOut(1000);
  });
}
$(document).ready(main);
