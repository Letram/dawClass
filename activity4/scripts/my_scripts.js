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
	
	/* completar el código de las funciones para que se produzca el efecto 'relámpago' con las tres imágenes de fondo*/
	function lightning_one(){
	};
	
	function lightning_two(){
	};

	function lightning_three(){
	};

	window.onblur = stopMe;
	window.onfocus = runLightning;
	runLightning();
	
	/* asignar eventos 'click' a los elementos head, eyes, nose y mouth para que se desplace la imagen a la izq 367 px con el método 'animate'   
	*/
	
	
	$("#btnRandom").click( randomize );
	
	$("#btnReset").click( reset );
	
	/* completar (sustituir las XXX) el código de las funciones reset y randomize para que produzca el efecto de reseteo de todas las imágenes a la posición inicial  */ 
	function reset(){
		$("XXX").each(function(index){
			var move_to = clix[index] * distance;
			clix[index] = 0;
			$(XXX).XXX({left:"+="+move_to+"px"},500);
		});
	}
	
	function getRandom(num){
		var my_random_num = Math.floor(Math.random()*num);
		return my_random_num;
	}

	function randomize(){
		XXXXXXXXX {
			var target_position = parseInt( (getRandom(num_monsters) + clix[index]) % num_monsters); 
			var current_position = clix[index] ;
			
			clix[index] = target_position;
			
			if( target_position > current_position ) {
				var move_to = (target_position - (current_position % distance) ) * distance; 
				$(XXX).XXX({left:"-="+move_to+"px"},500);
			}else if( target_position < current_position ){
				var move_to = ( (current_position % distance) - target_position) * distance; 
				$(XXX).XXX({left:"+="+move_to+"px"},500);
			}else{
				// They are the same - Don't move it.
			}
		});
	};	
	
});//end doc.onready function
