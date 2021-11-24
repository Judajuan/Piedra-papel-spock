$(document).ready(function(){
	// cerrar modal reglas juego
	$('.rules-modal-close').click(function(){
		$('.rules-modal').hide();	
	});	

	// click modal relgas juego
	$('.rules-modal-open').click(function(){
		$('.rules-modal').show();	
	});	

	$('.container-game__results').hide();

	// click play now
	$('#text_result').click(function(){
		location.reload();
	});	
	var points = document.createElement('b');
			points.innerText = localStorage.getItem('puntaje');
			document.getElementById('points').appendChild(points);

});
// Inicia juego
	function jugar(jugada_humano){
		// al elegir una opcion muestra el contenedor se resukltados
		$('.container-game__results').show();
		// y oculta el de elegir opciones
		$('.container-game__options').hide();
		// declara estados de resultado
		var posibles_resultados = ['Empate','Ganaste', 'Perdiste']; 
		// botones con border resultado
		var ids_jugadas = ['container-game__figure--paper','container-game__figure--rock','container-game__figure--scissors','container-game__figure--lizard','container-game__figure--spock'];
		// imagenes resultado
		var rutas_jugadas = ['images/images-recursos/icon-rock.svg','images/images-recursos/icon-paper.svg','images/images-recursos/icon-scissors.svg','images/images-recursos/icon-lizard.svg','images/images-recursos/icon-spock.svg']; 
		// numero al azar entre 1 y 5
		var jugada_computadora = Math.floor(Math.random() * 5);
		// define tablero opciones jugadas
		var tablero_jugadas = 
							[
								[0,1,2,2,1],
								[2,0,1,1,2],
								[1,2,0,2,1],
								[1,2,1,1,0],
								[2,1,2,1,0]
							];
		// texto jugadas
		var tablero_jugadas__descripcion = 
					[
						['Empate','Papel tapa a piedra','Piedra rompe tijeras','Piedra aplasta lagarto','Spock vaporiza piedra'
						],
						['Papel tapa a piedra','Empate','Tijeras cortan Papel','Lagarto come papel','Papel embuelbe a spock'
						],
						['Piedra rompe tijeras','Tijeras cortan Papel','Empate','Tijeras cortan Lagarto','Spock rompe Tijeras'
						],
						['Piedra aplasta lagarto','Lagarto come papel','Tijeras cortan Lagarto','Empate','Lagarto envenena a spock'
						],
						['Spock vaporiza piedra','Papel embuelbe a spock','Spock rompe tijeras','Lagarto envenena a spock','Empate'
						]
					];

		

		// Crea la opcion elegida por el humano o usuario
		var contentHuman = document.getElementById('human');
		let newButtonHuman = document.createElement('button'); 
		let newImgHuman = document.createElement('img');
		newImgHuman.src = rutas_jugadas[jugada_humano];
		newButtonHuman.id = ids_jugadas[jugada_humano];
		contentHuman.appendChild(newButtonHuman);
		newButtonHuman.appendChild(newImgHuman);

		// Crea la opcion elegida por la CPU
		var contentCpu = document.getElementById('Cpu');
		let newButtonCpu = document.createElement('button'); 
		let newImgCpu = document.createElement('img');
		newImgCpu.src = rutas_jugadas[jugada_computadora];
		newButtonCpu.id = ids_jugadas[jugada_computadora];
		contentCpu.appendChild(newButtonCpu);
		newButtonCpu.appendChild(newImgCpu);

		// Muestra descripcion de resultado
		var contentTextResult = document.getElementById('text_result');
		let newTextResult = document.createElement('p');
		newTextResult.innerText = tablero_jugadas__descripcion[jugada_computadora][jugada_humano];
		contentTextResult.appendChild(newTextResult);

		// resultado ronda
		var resultado_ronda = tablero_jugadas[jugada_computadora][jugada_humano];


		// verifica si se pueden usar variable localStorage en el navegador
		if(typeof(Storage) !== 'undefined'){
			// verifica si la variable ya esta creanda
			if(localStorage.getItem('puntaje')){
				let actual = parseInt(localStorage.getItem('puntaje'));
				// si gana le suma un punto 
				if(resultado_ronda==1){
					actual= actual+1;
					localStorage.setItem('puntaje',actual);
				}
				// o si pierde, le resta un punto 
				else if(resultado_ronda==2){
					actual= actual-1;
					localStorage.setItem('puntaje',actual);
				}
			}
			// si no esta creada la crea
			else{
				localStorage.setItem('puntaje',0);	
			}
			// cambiar el puntaje
			$('#points').html(localStorage.getItem('puntaje'));
			
		}

	}