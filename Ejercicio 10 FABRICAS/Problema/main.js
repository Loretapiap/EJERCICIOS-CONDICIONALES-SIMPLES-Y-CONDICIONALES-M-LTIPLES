var n1 = prompt("ingrese clave de articulo: 1, 2, 3, 4, 5 o 6");
while (!/^([1-6])*$/.test(n1)){
n1 = prompt("el valor ingresado no está dentro del rango, ingrese nuevamente");
}
var n2 = prompt("ingrese costo de materia prima");
while (!/^([0-9])*$/.test(n2)){
n2 = prompt("el valor ingresado no es un numero, ingrese nuevamente");
}

if (n1=="1") {
	var costo = parseInt(n2) + (parseInt(n2) + parseInt(n2)*0.8) + (parseInt(n2) + parseInt(n2)*0.28);
	document.write("Su presupuesto es: $" + costo)
	;}

if (n1=="2") {
	var costo = parseInt(n2) + (parseInt(n2) + parseInt(n2)*0.85) + (parseInt(n2) + parseInt(n2)*0.3);
	document.write("Su presupuesto es: $" + costo)
	;}

if (n1=="3") {
	var costo = parseInt(n2) + (parseInt(n2) + parseInt(n2)*0.75) + (parseInt(n2) + parseInt(n2)*0.35);
	document.write("Su presupuesto es: $" + costo)
	;}

if (n1=="4") {
	var costo = parseInt(n2) + (parseInt(n2) + parseInt(n2)*0.75) + (parseInt(n2) + parseInt(n2)*0.28);
	document.write("Su presupuesto es: $" + costo)
	;}

if (n1=="5") {
	var costo = parseInt(n2) + (parseInt(n2) + parseInt(n2)*0.8) + (parseInt(n2) + parseInt(n2)*0.3);
	document.write("Su presupuesto es: $" + costo)
	;}

if (n1=="6") {
	var costo = parseInt(n2) + (parseInt(n2) + parseInt(n2)*0.85) + (parseInt(n2) + parseInt(n2)*0.35);
	document.write("Su presupuesto es: $" + costo)
	;}



