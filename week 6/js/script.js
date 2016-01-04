//javascript window.onload = function(){}
$(document).ready(function(){
//alert("in een extern bestand");
	$("#knop").on("click",function(){
	alert("knop werkt");
		var invoer = $("#invoer").val();
		$("#lijst").append('<li class="item"><span>' + invoer + "</span><img class='edit' src='images/edit.png' width='16' height='16'><img class='delete' src='images/delete.png' width='16' height='16'></li>");
		$("#invoer").val("");
	});

	$('body').on("click",".item", function(){
		//alert("je hebt op " + $(this).text() + " geklikt");
	});

	$("body").on("click", ".delete", function(){
		$(this).parent().remove();
	});
	$("body").on("click", ".edit", function(){
		var edit= prompt("wijzigen", $(this).prev().text());
		$(this).prev().text(edit);
	});

	// hier komt de rest
	// span gebruikt alleen de ruimtie die hij nodig heeft
	// div heeft afmeting, is een blok

	//  # is bij id
	// . is bij class
	// alleen naam is bij tag
});