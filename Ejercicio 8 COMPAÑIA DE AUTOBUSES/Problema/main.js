var n1 = prompt("Ingrese el número de pasajeros");

if(n1>=20) {
	document.write("Considerando que son " + n1 + " pasajeros: ");
	document.write("<br>" + "<br>");

	document.write("En el autobus A con valor de pasaje a $2.0, el presupuesto es $");
	var precio = parseInt(n1) * 2;
	document.write(precio);

	document.write("<br>");

	document.write("En el autobus B con valor de pasaje a $2.5, el presupuesto es $");
	var precio = parseInt(n1) * 2.5;
	document.write(precio);

	document.write("<br>");

	document.write("En el autobus C con valor de pasaje a $3.0, el presupuesto es $");
	var precio = parseInt(n1) * 3;
	document.write(precio);
}

else if(n1<20) {
	document.write("Considerando que son " + n1 + " pasajeros y no cumple con el mínimo:");
	document.write("<br>" + "<br>");

	document.write("En el autobus A con valor de pasaje a $2.0, el presupuesto es $");
	var precio = 20 * 2;
	document.write(precio);

	document.write("<br>");

	document.write("En el autobus B con valor de pasaje a $2.5, el presupuesto es $");
	var precio = 20 * 2.5;
	document.write(precio);

	document.write("<br>");

	document.write("En el autobus C con valor de pasaje a $3.0, el presupuesto es $");
	var precio = 20 * 3;
	document.write(precio);
}



/*
Una compañía de viajes cuenta con tres tipos de autobuses (A, B y C), cada uno 
tiene un precio por kilómetro recorrido por persona, los costos respectivos son 
$2.0, $2.5 y $3.0.

Se requiere determinar el costo total y por persona del viaje considerando que 
cuando éste se presupuesta debe haber un mínimo de 20 personas, de lo contrario el 
cobro se realiza con base en este número límite
*/