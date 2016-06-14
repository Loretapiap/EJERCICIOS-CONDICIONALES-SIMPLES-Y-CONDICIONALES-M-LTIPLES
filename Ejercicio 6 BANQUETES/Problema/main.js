var n1 = prompt("Ingrese el número de clientes");

if(n1>=301) {
	document.write("Ya que su evento cuenta con más de 300 asistentes, el valor por plato es de $75.00, por lo tanto su presupuesto es de ");
	var precio = parseInt(n1) * 75;
	document.write("$" + precio);

}

else if(n1>200) {
	document.write("Ya que su evento cuenta con más de 201 asistentes pero menos de 301, el valor por plato es de $85.00, por lo tanto su presupuesto es de ")
	var precio2 = parseInt(n1) * 85;
	document.write("$" + precio2)
}

else if(n1<=200) {
	document.write("Ya que su evento cuenta con menos de 201 asistentes, el valor por plato es de $95.00, por lo tanto su presupuesto es de ")
	var precio3 = parseInt(n1) * 95;
	document.write("$" + precio3)
}


/*
“La langosta ahumada” es una empresa dedicada a ofrecer banquetes; 
sus tarifas son las siguientes: el costo de platillo por persona es de $95.00, 
pero si el número de personas es mayor a 200 pero menor o igual a 300, el costo es 
de $85.00. Para más de 300 personas el costo por platillo es de $75.00.

Se requiere un algoritmo que ayude a determinar el presupuesto que se debe 
presentar a los clientes que deseen realizar un evento. Mediante pseudocódigo y 
diagrama de flujo represente su solución.
*/