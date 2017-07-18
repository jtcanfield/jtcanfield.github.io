function main() { 
}
$(document).ready(main);
$(document).ready(function() {  
$("div").hover(function(){
        $(this).toggleClass("red");
        $(this).toggleClass("cometcolor");
});
$("div").click(function(){
				$(this).removeClass("cometcolor");
        $(this).removeClass("red");
        $(this).addClass("explode").fadeOut(1000);
});
$("#part1").hide();
$("#part2").hide();
$("#part3").hide();
$("#part4").hide();
$("#part5").hide();
$("#part6").hide();
$("#comet").hide();
$("#part1").fadeIn(4000);
$("#part1").delay(4000).fadeOut(4000);
$("#part2").delay(12000).fadeIn(4000);
$("#part2").delay(4000).fadeOut(4000);
$("#part3").delay(24000).fadeIn(4000);
$("#part3").delay(4000).fadeOut(4000);
$("#comet").delay(35000).fadeIn(0).addClass("animationactivated");
$("#part4").delay(38000).fadeIn(2000);
$("#part4").delay(4000).fadeOut(2000);
$("#part5").delay(46000).fadeIn(2000);
$("#part5").delay(4000).fadeOut(2000);
$("#part6").delay(75000).fadeIn(2000);
$("#part6").delay(4000).fadeOut(2000);
$("#cometa").ready(function(){
$("#cometa").hide();
$("#cometa").delay(45000);
animateComet("#cometa");
});
$("#cometb").ready(function(){
$("#cometb").hide();
$("#cometb").delay(46000);
animateComet("#cometb");
});
$("#cometb").ready(function(){
$("#cometb").hide();
$("#cometb").delay(47000);
animateComet("#cometb");
});
$("#cometc").ready(function(){
$("#cometc").hide();
$("#cometc").delay(48000);
animateComet("#cometc");
});
$("#cometd").ready(function(){
$("#cometd").hide();
$("#cometd").delay(49000);
animateComet("#cometd");
});
$("#comete").ready(function(){
$("#comete").hide();
$("#comete").delay(50000);
animateComet("#comete");
});
$("#cometf").ready(function(){
$("#cometf").hide();
$("#cometf").delay(51000);
animateComet("#cometf");
});
$("#cometg").ready(function(){
$("#cometg").hide();
$("#cometg").delay(52000);
animateComet("#cometg");
});
$("#cometh").ready(function(){
$("#cometh").hide();
$("#cometh").delay(53000);
animateComet("#cometh");
});
$("#cometi").ready(function(){
$("#cometi").hide();
$("#cometi").delay(54000);
animateComet("#cometi");
});
$("#cometj").ready(function(){
$("#cometj").hide();
$("#cometj").delay(55000);
animateComet("#cometj");
});
$("#cometk").ready(function(){
$("#cometk").hide();
$("#cometk").delay(56000);
animateComet("#cometk");
});
$("#cometl").ready(function(){
$("#cometl").hide();
$("#cometl").delay(57000);
animateComet("#cometl");
});
$("#cometm").ready(function(){
$("#cometm").hide();
$("#cometm").delay(58000);
animateComet("#cometm");
});
$("#cometa").ready(function(){
$("#cometa").hide();
$("#cometa").delay(1000);
animateComet("#cometa");
});
$("#cometb").ready(function(){
$("#cometb").hide();
$("#cometb").delay(1000);
animateComet("#cometb");
});
$("#cometb").ready(function(){
$("#cometb").hide();
$("#cometb").delay(1000);
animateComet("#cometb");
});
$("#cometc").ready(function(){
$("#cometc").hide();
$("#cometc").delay(1000);
animateComet("#cometc");
});
$("#cometd").ready(function(){
$("#cometd").hide();
$("#cometd").delay(1000);
animateComet("#cometd");
});
$("#comete").ready(function(){
$("#comete").hide();
$("#comete").delay(1000);
animateComet("#comete");
});
$("#cometf").ready(function(){
$("#cometf").hide();
$("#cometf").delay(1000);
animateComet("#cometf");
});
$("#cometg").ready(function(){
$("#cometg").hide();
$("#cometg").delay(1000);
animateComet("#cometg");
});
$("#cometh").ready(function(){
$("#cometh").hide();
$("#cometh").delay(1000);
animateComet("#cometh");
});
$("#cometi").ready(function(){
$("#cometi").hide();
$("#cometi").delay(1000);
animateComet("#cometi");
});
$("#cometj").ready(function(){
$("#cometj").hide();
$("#cometj").delay(1000);
animateComet("#cometj");
});
$("#cometk").ready(function(){
$("#cometk").hide();
$("#cometk").delay(1000);
animateComet("#cometk");
});
$("#cometl").ready(function(){
$("#cometl").hide();
$("#cometl").delay(1000);
animateComet("#cometl");
});
$("#cometm").ready(function(){
$("#cometm").hide();
$("#cometm").delay(1000);
animateComet("#cometm");
});
});


function makeNewPosition(){
    var top = $(window).height();
    var left = $(window).width();
    
    var starttop = Math.floor(Math.random()*(top-0+1)+0);
    var startleft = Math.floor(Math.random()*((left+80)-left+20)+left);
    
    var finaltop = Math.floor(Math.random()*(top-0+1)+0);
    var finalleft = Math.floor(Math.random()*(-80-50+1)-50);
    var time = Math.floor(Math.random()*(4000-1000+1)+1000);
    return [starttop,startleft,finaltop,finalleft,time];      
}
function animateComet(name){
    var newq = makeNewPosition();
    $(name).animate({ top: newq[0], left: newq[1] },function(){
    });
    $(name).fadeIn(0);
    $(name).animate({ top: newq[2], left: newq[3] }, newq[4], function(){
  
});
};
