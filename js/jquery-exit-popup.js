var last_position = {};
$(document).on('mousemove', function (event) {
    if (typeof(last_position.x) != 'undefined') {
        var deltaX = last_position.x - event.offsetX,
            deltaY = last_position.y - event.offsetY;
        if (Math.abs(deltaY) > Math.abs(deltaX) && deltaY > 0) {
            //upward movement		
			if(event.pageY <= 5){
				$('#exitpopup').css('left', (window.innerWidth/2 - $('#exitpopup').width()/2));
			    $('#exitpopup').css('top', (window.innerHeight/2 - $('#exitpopup').height()/2));
				// Show the exit popup
				$('#exitpopup_bg').fadeIn();
				$('#exitpopup').fadeIn();
			}
        }
    }
    last_position = {
        x : event.offsetX,
        y : event.offsetY
    };
});

$('#exitpopup_bg').click(function(){
    $('#exitpopup_bg').fadeOut();
    $('#exitpopup').slideUp();
});