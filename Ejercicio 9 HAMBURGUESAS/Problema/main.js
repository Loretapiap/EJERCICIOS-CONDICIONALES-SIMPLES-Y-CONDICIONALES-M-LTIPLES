var n1 = prompt("Ingrese número de hamburguesas");
var n2 = prompt("Ingrese medio de pago (efectivo o tarjeta)")

if(n2=="efectivo") {
	document.write("Presupuesto en efectivo:");
	document.write("<br>" + "<br>");

	document.write("El total por " + n1 + "  Hamburguesa sencilla es: $");
	var precio = parseInt(n1) * 20;
	document.write(precio);

	document.write("<br>");

	document.write("El total por " + n1 + "  Hamburguesa doble es: $");
	var precio = parseInt(n1) * 25;
	document.write(precio);

	document.write("<br>");

	document.write("El total por " + n1 + " Hamburguesa triple es: $");
	var precio = parseInt(n1) * 28;
	document.write(precio);

}

else if(n2=="tarjeta") {
	document.write("Presupuesto con crédito (cargo del 5%):");
	document.write("<br>" + "<br>");

	document.write("El total por " + n1 + "  Hamburguesa sencilla es: $");
	var precio = parseInt(n1) * 20;
	var total = precio * 0.05;
	document.write(precio + total);

	document.write("<br>");

	document.write("El total por " + n1 + "  Hamburguesa doble es: $");
	var precio = parseInt(n1) * 25;
	var total = precio * 0.05;
	document.write(precio + total);

	document.write("<br>");

	document.write("El total por " + n1 + " Hamburguesa triple es: $");
	var precio = parseInt(n1) * 28;
	var total = precio * 0.05;
	document.write(precio + total);
}
/*
“El náufrago satisfecho” ofrece hamburguesas sencillas, dobles y triples, 
las cuales tienen un costo de $20.00, $25.00 y $28.00 respectivamente. 
La empresa acepta tarjetas de crédito con un cargo de 5 % sobre la compra. 
Suponiendo que los clientes adquieren sólo un tipo de hamburguesa, realice un 
algoritmo para determinar cuánto debe pagar una persona por N hamburguesas.
*/