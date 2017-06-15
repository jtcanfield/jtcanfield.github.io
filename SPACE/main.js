function main() { 
}
$(document).ready(main);
$(document).ready(function() {  
$("#part1").hide();
$("#part2").hide();
$("#part3").hide();
$("#part4").hide();
$("div").hide();
$("#part1").fadeIn(4000);
$("#part1").delay(4000).fadeOut(4000);
$("#part2").delay(12000).fadeIn(4000);
$("#part2").delay(4000).fadeOut(4000);
$("#part3").delay(24000).fadeIn(4000);
$("#part3").delay(4000).fadeOut(4000);
$("div").delay(36000).fadeIn(0).addClass("animationactivated");
$("#part4").delay(40000).fadeIn(4000);
});
