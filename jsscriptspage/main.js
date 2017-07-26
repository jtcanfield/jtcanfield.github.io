function main() {
$(".html").hide();
$(".html").fadeIn(1000);
}
$(document).ready(main);
$(document).ready(function(){
	$(".submitorder").click(function() {
		var subTotal = 0;


		var sizeanswer = document.getElementById("sizeanswer");
		if(document.getElementById("sizelarge").checked) {
		sizeanswer.innerHTML= "Large Selected";
		subTotal = subTotal + 12;}
		if(document.getElementById("sizemedium").checked) {
		sizeanswer.innerHTML= "Medium Selected";
		subTotal = subTotal + 10;}
		if(document.getElementById("sizesmall").checked) {
		sizeanswer.innerHTML= "Small Selected";
		subTotal = subTotal + 8;}

		var crustanswer = document.getElementById("crustanswer");
		if(document.getElementById("crustfilled").checked) {
		crustanswer.innerHTML= "Filled Selected";
		subTotal = subTotal + 5;}
		if(document.getElementById("crustthick").checked) {
		crustanswer.innerHTML= "Thick Selected";
		subTotal = subTotal + 2;}
		if(document.getElementById("crustthin").checked) {
		crustanswer.innerHTML= "Thin Selected";
		subTotal = subTotal + 1;}

		var toppinganswer = document.getElementById("toppinganswer");
		var alltoppings = "";
		if(document.getElementById("pepperoni").checked) {
		alltoppings = alltoppings + "Pepperoni, ";
		subTotal = subTotal + 0.5;}
		if(document.getElementById("bacon").checked) {
		alltoppings = alltoppings + "Bacon, ";
		subTotal = subTotal + 0.5;}
		if(document.getElementById("sausage").checked) {
		alltoppings = alltoppings + "Sausage, ";
		subTotal = subTotal + 0.5;}
		if(document.getElementById("beef").checked) {
		alltoppings = alltoppings + "Beef, ";
		subTotal = subTotal + 0.5;}
		if(document.getElementById("pineapple").checked) {
		alltoppings = alltoppings + "Pineapple, ";
		subTotal = subTotal + 0.5;}
		if(document.getElementById("tomatoes").checked) {
		alltoppings = alltoppings + "Tomatoes, ";
		subTotal = subTotal + 0.5;}
		if(document.getElementById("greenpeppers").checked) {
		alltoppings = alltoppings + "Green Peppers, ";
		subTotal = subTotal + 0.5;}
		if(document.getElementById("pickles").checked) {
		alltoppings = alltoppings + "Pickles, ";
		subTotal = subTotal + 0.5;}
		if(document.getElementById("extracheese").checked) {
		alltoppings = alltoppings + "Extra Cheese, ";
		subTotal = subTotal + 0.5;}
		toppinganswer.innerHTML= alltoppings;

		var subtotalamount = document.getElementById("subtotalamount");
		subtotalamount.innerHTML = subTotal;

		var tax = document.getElementById("taxamount");
		var getTax = subTotal * 0.06;
		tax.innerHTML = getTax;

		var tipamount = document.getElementById("tipamount");
		var getTip = $('input:text').val();
		getTip = getTip * 1;
		tipamount.innerHTML = getTip;

		var finalamount = document.getElementById("finalamount");
		var getFinal = subTotal + getTip + getTax;
		finalamount.innerHTML = getFinal;
	});
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
