$(document).ready(function() {

	tripList = $('#trip-list li');
	degrees = [];
	display = []
	$('#trip-list li').each(function (index) {
		degrees.push(45);
		display.push(0);
		icon = $(this).children('i');
		icon.click(function () {
			console.log(display);
			//icon rotates 45deg
			$(this).css({'transform' : 'rotate('+ degrees[index] +'deg)'});
			$(this).css({'transition' : 'all 0.25s ease-in-out'});
			degrees[index] += 45;

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
});