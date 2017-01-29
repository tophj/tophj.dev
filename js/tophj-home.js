$(document).ready(function(){
	// tophj - title
    $(".name-div").mouseenter(function(e){
		$(this).fadeOut(1000, function(){
			$(this).html("chris<span class=\"red\">toph</span>er <span class=\"red\">j</span>ones ");
			$(this).fadeIn(1000);
		});
	}).mouseleave(function(e){
		$(this).fadeOut(1000, function(){
			$(this).html("toph<span class=\"red\">j</span>");
			$(this).fadeIn(1000);
		});
	});
});


