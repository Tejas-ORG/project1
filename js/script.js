$(document).ready(function(){
//========================== Home Page ========================//
$(".people-box-part ul li:nth-child(4n+4)").addClass("last");	
//========================== And all Script ========================//

	$('.slider').slides({
		generateNextPrev: true,
		effect:'fade',
		crossfade:true,
		play: 5000,
		fadeSpeed: 1000,
		pause: 2500
	});

});