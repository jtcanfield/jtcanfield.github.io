var app = angular.module("myApp", []);

app.controller('MainController', ['$scope', function($scope) {
  $scope.title = "Jonathan's Angular Page";
}]);
function changeBackground() {
    var color = document.getElementById("color").value;
    document.getElementById("coltext").style.color = color;
}
document.getElementById("submitColor").addEventListener("click", changeBackground, false);

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
