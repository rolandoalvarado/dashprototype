$(document).ready(function(){
	var wHeight = $(window).outerHeight() - $('#footer-wrap').outerHeight() - $('#head-wrap').outerHeight() - $('#mainnav-wrap').outerHeight();
	
	$('#instances').height(wHeight);
	$('#details').height(wHeight);

});