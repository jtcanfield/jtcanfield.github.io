var app = angular.module("myApp", []);

app.controller('MainController', ['$scope', function($scope) {
  $scope.title = "Jonathan's Angular Page";

}]);
function changeBackground() {
    var color = document.getElementById("color").value;
    document.getElementById("coltext").style.color = color;
}
document.getElementById("submitColor").addEventListener("click", changeBackground, false);
