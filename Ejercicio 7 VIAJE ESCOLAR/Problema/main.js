var n1 = prompt("Ingrese el número de asistentes");

if(n1>=100) {
	document.write("Ya que son 100 o más asistentes, cada alumno debe pagar $65.00 para pagarle a la compañía de autobuses: $");
	var precio = parseInt(n1) * 65;
	document.write(precio);

}

else if(n1>=50) {
	document.write("Ya que son 50 o más asistentes, cada alumno debe pagar $70.00 para pagarle a la compañía de autobuses: $")
	var precio2 = parseInt(n1) * 70;
	document.write(precio2)
}

else if(n1>=30) {
	document.write("Ya que son 30 o más asistentes, cada alumno debe pagar $95.00 para pagarle a la compañía de autobuses: $")
	var precio3 = parseInt(n1) * 95;
	document.write(precio3)
}

else if(n1<30) {
	document.write("Ya que son menos de 30 asistentes, el costo de la renta del autobús es de $4000.00")
}


/*
El director de una escuela está organizando un viaje de estudios, 
y requiere determinar cuánto debe cobrar a cada alumno y cuánto debe pagar a la 
compañía de viajes por el servicio. La forma de cobrar es la siguiente: si son 100 
alumnos o más, el costo por cada alumno es de $65.00; de 50 a 99 alumnos, el costo 
es de $70.00, de 30 a 49, de $95.00, y si son menos de 30, el costo de la renta del 
autobús es de $4000.00, sin importar el número de alumnos.

Realice un algoritmo que permita determinar el pago a la compañía de autobuses 
y lo que debe pagar cada alumno por el viaje (represente en pseudocódigo y diagrama 
de flujo)
*/