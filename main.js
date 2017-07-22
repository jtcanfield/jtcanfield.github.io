function main() {
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
/* Moved Below Scripts to CSS, kept for future reference
this animation will always finish the first animation before doing the next one,
so if you want something that keeps going after the user has finished interacting
with it, use this.
$(document).ready(function() {
   $('a').mouseenter(function() {
       $(this).animate({
           padding: "+=10px",
       });
   });
   $('a').mouseleave(function() {
       $(this).animate({
           padding: "-=10px",
       });
   });
});
*/
