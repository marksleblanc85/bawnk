$(function(){
	$('body').click(function(e){
		var target = $(e.target);
	    if(!target.is('.modal.login') && !$('.modal.login').has(target).length > 0) {
	        if ($('.modal.login').is(':visible')){
	        	$('.modal').add('.shade').fadeOut();
	        }
	    }
	    if(!target.is('#messages-container') && !$('#messages-container').has(target).length > 0) {
	        if ($('#messages-container').is(':visible')){
	        	$('#header a.messages').click();
	        }
	    }
	    if(!target.is('.corner-container') && !$('.corner-container').has(target).length > 0) {
	        if ($('.corner-container').is(':visible')){
	        	$('#header .toggle').click();
	        }
	    }
	});
	$('#header .login-toggle').toggle(function(){
		$('.modal').add('.shade').fadeIn('fast');
		$('.modal:visible').css('top',($(window).height()/2-parseInt($('.modal:visible .modal-container').css('height')))+'px');
		$('.modal .'+$(this).attr('data-target')).show();
	}, function(){
		$('.modal').add('.shade').fadeIn('fast');
		$('.modal .'+$(this).attr('data-target')).show();
	});
	$('#header .toggle').toggle(function(){
		$(this).css('background-position','right top');
		$('.corner-container').fadeIn();
	}, function(){
		$(this).css('background-position','right bottom');
		$('.corner-container').fadeOut();
	});
	$('.modalopen').click(function(){
		$('.modal#'+$(this).attr('data-target')).add('.shade').fadeIn('fast');
	});
	if($('.shade').is(':visible')){
		$('.shade').click(function(){
			$(this).add('.modal').fadeOut();
		});
	}
	$('.modalclose').click(function(){
		$('.modal').add('.shade').fadeOut('fast');
		$('.modal-container > div').hide();
	});
	$('.height-offset').css('height',$(window).height()-253+'px');
});

/* loose scripts */
function showLoading(element) {
    element.addClass('ajax-load');
}

function hideLoading(element) {
    element.removeClass('ajax-load');
}
