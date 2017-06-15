function main() { 
$(".html").hide();
$(".html").fadeIn(1000);
}
$(document).ready(main);
$(document).ready(function(){
$(".submitorder").click(function() {

var sizeanswer = document.getElementById("sizeanswer");
if(document.getElementById("sizelarge").checked) {
sizeanswer.innerHTML= "Large Selected"; }
if(document.getElementById("sizemedium").checked) {
sizeanswer.innerHTML= "Medium Selected"; }
if(document.getElementById("sizesmall").checked) {
sizeanswer.innerHTML= "Small Selected"; }

var crustanswer = document.getElementById("crustanswer");
if(document.getElementById("crustthin").checked) {
crustanswer.innerHTML= "Thin Selected"; }
if(document.getElementById("crustthick").checked) {
crustanswer.innerHTML= "Thick Selected"; }
if(document.getElementById("crustfilled").checked) {
crustanswer.innerHTML= "Filled Selected"; }

});
});
