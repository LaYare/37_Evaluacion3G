//Problema
//Declara un arreglo vacío denominado nombres. 
//Pide al usuario tres nombres y almacena esos nombres como elementos arreglo. 
//A continuación muestra el contenido en un mensaje.

//Pseudocodigo
//Inicio
//declarar var nombres
//iniciar i = 1
//Pedir al usuario un nombre
//Agregar el nombre a la variable nombres
//Pedir al usuario un nombre
//Agregar el nombre a la variable nombres
//Pedir al usuario un nombre
//Agregar el nombre a la variable nombres
//mostrar la variable nombres
//fin.

var nombres = [];

for (var i = 1; i <= 3; i++) {

	var nuevo = prompt("Ingresa el nombre");
	nombres.push(nuevo);

}
alert(nombres);

