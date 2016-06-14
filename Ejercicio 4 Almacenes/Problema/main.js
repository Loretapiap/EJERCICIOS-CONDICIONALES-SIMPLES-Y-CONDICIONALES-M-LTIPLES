var n1 = prompt("Ingrese costo del traje en pesos");
    while (n1 == 0)
    {
        n1 = prompt("cero? No puede ser! intenta otra vez!");
    }


if(n1 >= 2500) {
	document.write("Se aplicará un descuento de 15%, Felicidades! Tu precio final es ");
	var resultado = parseInt(n1) * 0.75 ;
	document.write("$" + resultado)
}

else if(n1 < 2500) {
	document.write("Se aplicará un descuento del 8%, Felicidades! Tu precio final es ");
	var resultado2 = parseInt(n1) * 0.92;
	document.write("$" + resultado2)
}



/*
Almacenes “El harapiento distinguido” tiene una promoción: a todos los trajes que 
tienen un precio superior a $2500.00 se les aplicará un descuento de 15 %, 
a todos los demás se les aplicará sólo 8 %.

Realice un algoritmo para determinar el precio final que debe pagar una persona 
por comprar un traje y de cuánto es el descuento que obtendrá.
n1 * 0.75

*/