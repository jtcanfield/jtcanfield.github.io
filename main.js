function main() {
  $("html").fadeIn(1000);
  window.requestAnimationFrame = window.requestAnimationFrame 
    || window.mozRequestAnimationFrame 
    || window.webkitRequestAnimationFrame 
    || window.msRequestAnimationFrame 
    || function(f){
      setTimeout(f, 1000/60)
    };
}
$(document).ready(main);