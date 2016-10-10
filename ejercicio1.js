//Inicio
//Declarar ganador1 = 0;
//Declarar ganador2 = 0;
//Inciar ciclo for; 
//Iniciar i = 1
//Pedir Que el jugador numero uno elija piedra papel o tijera,
//Leer jugador1
//Pedir que jugador numero dos elija piedra, papel o tijera;
//Leer jugador2
//comparar jugador1 con jugador2,
//si jugador1 = piedra y jugador2 = tijera, sumar 1 a ganador1, si no, sumar 1 a ganador2;
//si jugador1 = papel y jugador2 = piedra, sumar 1 a ganador1, si no, sumar 1 a ganador2;
//si jugador1 = tijera y jugador2 = papel, sumar 1 a ganador1, si no, sumar 1 a ganador2;
//sumar 1 a i hasta llegar a tres
//Pedir Que el jugador numero uno elija piedra papel o tijera,
//Leer jugador1
//Pedir que jugador numero dos elija piedra, papel o tijera;
//Leer jugador2
//comparar jugador1 con jugador2,
//si jugador1 = piedra y jugador2 = tijera, sumar 1 a ganador1, si no, sumar 1 a ganador2;
//si jugador1 = papel y jugador2 = piedra, sumar 1 a ganador1, si no, sumar 1 a ganador2;
//si jugador1 = tijera y jugador2 = papel, sumar 1 a ganador1, si no, sumar 1 a ganador2;
//sumar 1 a i hasta llegar a tres
//Pedir Que el jugador numero uno elija piedra papel o tijera,
//Leer jugador1
//Pedir que jugador numero dos elija piedra, papel o tijera;
//Leer jugador2
//comparar jugador1 con jugador2,
//si jugador1 = piedra y jugador2 = tijera, sumar 1 a ganador1, si no, sumar 1 a ganador2;
//si jugador1 = papel y jugador2 = piedra, sumar 1 a ganador1, si no, sumar 1 a ganador2;
//si jugador1 = tijera y jugador2 = papel, sumar 1 a ganador1, si no, sumar 1 a ganador2;
//sumar 1 a i hasta llegar a tres
//Comparar ganador1 y ganador2, si ganador1 > ganador2
//mostrar "El primer jugador es el ganador"
//si no mostrar "El segundo jugador es el ganador"
//Fin



var ganador1 = 0;
var ganador2 = 0;

for (var i = 1; i <= 3; i++) {
	var jugador1 = prompt("Jugador uno, elija: piedra,papel o tijera");
	var jugador2 = prompt("Jugador dos, elija: piedra,papel o tijera");
 	

	if (jugador1 == "piedra" && jugador2 == "tijera") {
		ganador1++;
	}else if (jugador1 == "papel" && jugador2 == "piedra") {
		ganador1++;
	}else if (jugador1 == "tijera" && jugador2 == "papel") {
		ganador1++;
	}else{
		ganador2++;
	}
};

if (ganador1 > ganador2) {
	alert("El primer jugador es el ganador");
}else{
	alert("El segundo jugador es el ganador");
};
