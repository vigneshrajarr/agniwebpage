$(document).ready(function(){
	$(".description").hide();
    $(".vertical_div").mouseover(function(){
		$(this).css("-webkit-filter","grayscale(0%)");
		$(this).css("filter","grayscale(0%)");
		$(".vertical_div").css("-webkit-filter","grayscale(0%)");
		$(this).children().next().children().children().next().slideDown("fast");
		//$(this).children().css("background-color","rgba(0,0,0,0.4)");
		
	});
	$(".vertical_div").mouseleave(function(){
		$(".description").slideUp("fast");
	});
	
});