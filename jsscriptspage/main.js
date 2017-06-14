function main() { 
$(".html").hide();
$(".html").fadeIn(2000);
}
$(document).ready(main);
function incrementValue(){
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
}
