$(document).ready(function(){
	$('.list-item').hover(function(){
    	$(this).toggleClass('click');
    	$(this).find('.more-info').toggleClass('hide');
	});	
	
	$('.add').click(function(){
    	$('#proj-create').fadeIn('fast');
    	
    	$('#proj-name').focus();
	});
	
	$('#cancel').click(function(){
    	$('#proj-create').fadeOut('fast');
	});
	
	$('#create').click(function(){
		$('#proj-create').fadeOut('fast');
    	$('.notice-wrap').slideDown('fast').delay(3000).slideUp('fast');
	});
});

