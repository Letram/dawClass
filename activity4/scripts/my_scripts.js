$(document).ready(function(){

	var clix = [0,0,0,0]; // head,eyes,nose,mouth
	var distance = 367;
	var num_monsters = 10;

	var int1, int2, int3;
	
	function runLightning(){
		int1 = setInterval( function() {
					lightning_one();
				}, 	
				4000
			);
		
		int2 = setInterval( function() {
					lightning_two();
				}, 	
				5000
			);
		int3 = setInterval( function() {
					lightning_three();
				}, 	
				7000
			);
	}
	
	function stopMe()
	{
	   window.clearInterval(int1);
	   window.clearInterval(int2);
	   window.clearInterval(int3);
	}
	
	/* completar el c�digo de las funciones para que se produzca el efecto 'rel�mpago' con las tres im�genes de fondo*/
	function lightning_one(){
		for(i=0;i<3;i++) {
			$('#lightning1').fadeTo('slow', 0).fadeTo('slow', 1);
		}
		$('#lightning1').fadeOut(1000);
    }
    function lightning_two(){
        for(i=0;i<3;i++) {
            $('#lightning2').fadeTo('slow', 0).fadeTo('slow', 1);
        }
        $('#lightning2').fadeOut(1000);
    }
    function lightning_three(){
        for(i=0;i<3;i++) {
            $('#lightning3').fadeTo('slow', 1).fadeTo('slow', 1);
        }
        $('#lightning3').fadeOut(1000);
    }
    window.onblur = stopMe;
	window.onfocus = runLightning;
	runLightning();
	
	/* asignar eventos 'click' a los elementos head, eyes, nose y mouth para que se desplace la imagen a la izq 367 px con el m�todo 'animate'   
	*/
	
	$("#head").click(function(){
        if(clix[0] < 9){
            $(this).animate({left: "-=367px"}, 250);
            clix[0] += 1;
        }else{
            $(this).animate({left: "0"}, 250);
            clix[0] = 0;
        }
	});
    $("#eyes").click(function(){
        if(clix[1] < 9){
            $(this).animate({left: "-=367px"}, 1000);
            clix[1] += 1;
        }else{
            $(this).animate({left: "0"}, 1000);
            clix[1] = 0;
        }    });
    $("#nose").click(function(){
        if(clix[2] < 9){
            $(this).animate({left: "-=367px"}, 400);
            clix[2] += 1;
        }else{
            $(this).animate({left: "0"}, 400);
            clix[2] = 0;
        }    });
    $("#mouth").click(function(){
        if(clix[3] < 9){
            $(this).animate({left: "-=367px"}, 600);
            clix[3] += 1;
        }else{
            $(this).animate({left: "0"}, 600);
            clix[3] = 0;
        }    });

	$("#btnRandom").click( randomize );
	
	$("#btnReset").click(reset) ;
	
	/* completar (sustituir las XXX) el c�digo de las funciones reset y randomize para que produzca el efecto de reseteo de todas las im�genes a la posici�n inicial  */ 
	function reset(){
		$("#pic_box").find("div").each(function(index){
			var move_to = clix[index] * distance;
			clix[index] = 0;
			$(this).animate({left:"+="+move_to+"px"},500);
		});
	}
	
	function getRandom(num){
        return Math.floor(Math.random() * num);
	}

	function randomize(){
		$("#pic_box").find("div").each(function(index) {
			var target_position = parseInt( (getRandom(num_monsters) + clix[index]) % num_monsters);
			var current_position = clix[index] ;

			clix[index] = target_position;
            var move_to;
			if( target_position > current_position ) {
				move_to = (target_position - (current_position % distance) ) * distance;
				$(this).animate({left:"-="+move_to+"px"},500);
			}else if( target_position < current_position ){
				move_to = ( (current_position % distance) - target_position) * distance;
				$(this).animate({left:"+="+move_to+"px"},500);
			}else{
				// They are the same - Don't move it.
			}
		});
	}
	
});//end doc.onready function
