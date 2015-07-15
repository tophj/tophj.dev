$(document).ready(function(){

    $("h1").mouseenter(function(e){

		$("h1").fadeOut(1000, function(){
			$("h1").text("Go Away");
			$("h1").fadeIn(1000);
		});
	}).mouseleave(function(e){
		$("h1").fadeOut(1000, function(){
			$("h1").html("Nothing to see <span class=\"here\">here<span>");
			$("h1").fadeIn(1000);
		});
	});

});