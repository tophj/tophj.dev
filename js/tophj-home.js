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

	// ---------  work links----------
	$("#IBM").mouseenter(function(e){
		$(this).fadeOut(1000, function(){
			$(this).html("<span class=\"red\">Software Developer - Docker</span>");
			$(this).fadeIn(1000);
		});
	}).mouseleave(function(e){
		$(this).fadeOut(1000, function(){
			$(this).html("IBM<span id=\"red\"> (2015-)</span>");
			$(this).fadeIn(1000);
		});
	});
	$("#Battelle").mouseenter(function(e){
		$(this).fadeOut(1000, function(){
			$(this).html("<span class=\"red\">Software Developer - Cyber</span>");
			$(this).fadeIn(1000);
		});
	}).mouseleave(function(e){
		$(this).fadeOut(1000, function(){
			$(this).html("Battelle<span id=\"red\"> (2013,2014)</span>");
			$(this).fadeIn(1000);
		});
	});
	$("#UVA").mouseenter(function(e){
		$(this).fadeOut(1000, function(){
			$(this).html("<span class=\"red\">Software Developer - Chemistry Labs</span>");
			$(this).fadeIn(1000);
		});
	}).mouseleave(function(e){
		$(this).fadeOut(1000, function(){
			$(this).html("University of Virginia<span id=\"red\"> (2012)</span>");
			$(this).fadeIn(1000);
		});
	});





});


