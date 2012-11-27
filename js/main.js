$(document).ready(function(){
	$('.list-item').hover(function(){
    	$(this).toggleClass('click');
    	$(this).find('.more-info').toggleClass('hide');
	});	
	
	$('#projects-new').click(function(){
    	window.location = 'projects-new.html';
	});
	
	$('#instance-new').click(function(){
    	window.location = 'instance-new.html';
	});
	
	$('#cancel').click(function(){
    	$('#proj-create').fadeOut('fast');
	});
	
	$('#create').click(function(){
		$('#proj-create').fadeOut('fast');
    	$('.notice-wrap').slideDown('fast').delay(3000).slideUp('fast');
	});
	
	$('footer .show-vol').click(function(){
		$('#volume-list').toggle();
		return false
	})
	
	$('.dropdown-menu .show-vol').click(function(){
		$('#volume-list').toggle();
		return false
	})
	
	$('header .show-vol').click(function(){
		$('#volume-list').toggle();
		return false
	})
	
	$('.attachment .show-vol').click(function(){
		$('#volume-list-attached').toggle();
		return false
	})
	
	$('.show-new-vol').click(function(){
		$('#new-volume').toggle();
		return false
	})


});

$(document).mouseup(function (e)
{
    var container = $(".new-modal");

    if (container.has(e.target).length === 0)
    {
        container.hide();
    }
});

