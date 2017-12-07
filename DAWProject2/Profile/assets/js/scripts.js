$(document).ready(function() {

	tripList = $('#trip-list li');
	degrees = [];
	display = [];
	buttonState = 1;
	$('#trip-list li').each(function (index) {
		degrees.push(0.125);
		display.push(0);
		icon = $(this).children('i');
		icon.click(function () {
			//icon rotates 45deg(0.125turn) or places at the initial position
			$(this).css({'transform' : 'rotate('+ degrees[index] +'turn)'});
			$(this).css({'transition' : 'all 0.25s ease-in-out'});
			if(degrees[index] === 0.125)
				degrees[index] = 0;
			else
				degrees[index] = 0.125;

			//display(1) or hide(0) the description div
			if(display[index] === 0){
				$('#description' + index).show(250);
				display[index] = 1;
			} else{
                $('#description' + index).hide(250);
				display[index] = 0;
			}
        });
	});

	$('#thumbsUpIcon').click(function () {
		var parent = $(this).parent();
		var spanChildren = parent.children('span');
		if($(this).hasClass("not-voted")){
			var thumbsDown = $('#thumbsDownIcon');
			if(thumbsDown.hasClass('voted-down')){
				thumbsDown.removeClass('voted-down').addClass('not-voted');
                thumbsDown.parent().children('span').text(
                	parseInt(thumbsDown.parent().children('span').html())-1
				);
			}
			$(this).removeClass("not-voted").addClass("voted-up");
			spanChildren.text(parseInt(spanChildren.html())+1);
		}else{
            $(this).removeClass("voted-up").addClass("not-voted");
            spanChildren.text(parseInt(spanChildren.html())-1);
		}
    });

	$('#thumbsDownIcon').click(function () {
		var parent = $(this).parent();
		var spanChildren = parent.children('span');
		if($(this).hasClass("not-voted")){
            var thumbsUp = $('#thumbsUpIcon');
            if(thumbsUp.hasClass('voted-up')){
                thumbsUp.removeClass('voted-up').addClass('not-voted');
                thumbsUp.parent().children('span').text(
                    parseInt(thumbsUp.parent().children('span').html())-1
                );
            }
			$(this).removeClass("not-voted").addClass("voted-down");
			spanChildren.text(parseInt(spanChildren.html())+1);
		}else{
            $(this).removeClass("voted-down").addClass("not-voted");
            spanChildren.text(parseInt(spanChildren.html())-1);
		}
    });


});
	function showMoreFriends() {
        moreFriends = $('#moreFriends');
        button = $('#moreFriendsButton');

        //More = 1 , Less = 0
		if(buttonState === 1){
			button.html("Less");
			buttonState = 0;
		}else{
			button.html("More");
			buttonState = 1;
		}
		//we show a div with more friends
        if(moreFriends.css('display') === 'none')
            moreFriends.show(250);
        else
            moreFriends.hide(250);

    }
