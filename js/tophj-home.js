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
			$(this).html("<span class=\"red\">Software Engineer - Docker</span>");
			$(this).fadeIn(1000);
		});
	}).mouseleave(function(e){
		$(this).fadeOut(1000, function(){
			$(this).html("<span id=\"work-years\">(2015-)</span>IBM");
			$(this).fadeIn(1000);
		});
	});
	$("#Battelle").mouseenter(function(e){
		$(this).fadeOut(1000, function(){
			$(this).html("<span class=\"red\">Software Engineer - Cyber</span>");
			$(this).fadeIn(1000);
		});
	}).mouseleave(function(e){
		$(this).fadeOut(1000, function(){
			$(this).html("<span id=\"work-years\">(2013,2014)</span> Battelle");
			$(this).fadeIn(1000);
		});
	});
	$("#UVA").mouseenter(function(e){
		$(this).fadeOut(1000, function(){
			$(this).html("<span class=\"red\">Software Engineer - Chemistry Labs</span>");
			$(this).fadeIn(1000);
		});
	}).mouseleave(function(e){
		$(this).fadeOut(1000, function(){
			$(this).html("<span id=\"work-years\">(2012)</span> University of Virginia");
			$(this).fadeIn(1000);
		});
	});





});


