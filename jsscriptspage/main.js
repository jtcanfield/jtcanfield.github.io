function main() {
$(".html").hide();
$(".html").fadeIn(1000);
}
$(document).ready(main);
$(document).ready(function(){
	$("#incrementbutton").click(function(){
    var value = parseInt(document.getElementById('incrementnumber').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('incrementnumber').value = value;
				});
    $("#addbutton").click(function(){
        var toAdd = $("input[name=checkListItem]").val();
        $(".list").append("<div class='item'>" + toAdd + "</div>");
        });
    $("#deletebutton").click(function(){
        $(".item").remove();
        });
    $(".list").on('click', '.item', function() {
        $(this).remove();
  });
});
