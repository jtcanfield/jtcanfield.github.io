function main() { 
$(".html").hide();
$(".html").fadeIn(1000);
}
$(document).ready(main);
function incrementValue(){
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
}
$(document).ready(function(){
    $("#addbutton").click(function(){
        var toAdd = $("input[name=checkListItem]").val();
        $(".list").append("<div class='item'>" + toAdd + "</div>");
        });
     $("#deletebutton").click(function(){
        if("input:checkbox:checked"){
        $(".item").remove();}
        });
    });
