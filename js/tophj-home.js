$(document).ready(function(){
    $(".nothing-div").mouseenter(function(e){
		$(this).fadeOut(1000, function(){
			$(this).text("Go Away");
			$(this).fadeIn(1000);
		});
	}).mouseleave(function(e){
		$(this).fadeOut(1000, function(){
			$(this).html("Nothing to see <span class=\"here\">here</span>");
			$(this).fadeIn(1000);
		});
	});
});