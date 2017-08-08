function main() {
$(".div2").hide();
$(".html").hide();
$(".html").fadeIn(1000);
$(".changepage").on('click', function() {
   $(".div1").slideToggle(1000);
   $(".div2").slideToggle(1000);
});
  window.requestAnimationFrame = window.requestAnimationFrame
   || window.mozRequestAnimationFrame
   || window.webkitRequestAnimationFrame
   || window.msRequestAnimationFrame
   || function(f){setTimeout(f, 1000/60)}

  var parallax1 = document.getElementById('parallax1')

  function parallaxeffect(){
    var scrolltop = window.pageYOffset // get number of pixels document has scrolled vertically
    parallax1.style.backgroundPosition = "0px " + -scrolltop * .5 + 'px'
}
  window.addEventListener('scroll', function(){ // on page scroll
    requestAnimationFrame(parallaxeffect) // call parallaxeffect() every screen paint
  }, false)
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
/*PARALLAX EFFECTS*/
/* Create cross browser requestAnimationFrame method:
window.requestAnimationFrame = window.requestAnimationFrame
  || window.mozRequestAnimationFrame
  || window.webkitRequestAnimationFrame
  || window.msRequestAnimationFrame
  || function(f){setTimeout(f, 1000/60)}

var parallax1 = document.getElementById('parallax1')
var parallax2 = document.getElementById('parallax2')

function parallaxeffect(){
  var scrolltop = window.pageYOffset // get number of pixels document has scrolled vertically
  parallax1.style.top = -scrolltop * .2 + 'px' // move parallax1 at 20% of scroll rate
  parallax2.style.top = -scrolltop * .5 + 'px' // move parallax2 at 50% of scroll rate
}

window.addEventListener('scroll', function(){ // on page scroll
  requestAnimationFrame(parallaxeffect) // call parallaxeffect() on next available screen paint
}, false)
*/
