var n1 = prompt("Ingrese primera calificación (entre 1 y 10)");
    while (n1 == 0)
    {
        n1 = prompt("cero? pero si te dan 1 por escribir tu nombre! no puede ser!");
    }
        while (n1 > 10)
    {
        n1 = prompt("Te dije menor a 10! >:C ");
    }

var n2 = prompt("Ingrese segunda calificación (entre 1 y 10)");
    while (n2 == 0)
    {
        n2 = prompt("cero? pero si te dan 1 por escribir tu nombre! no puede ser!");
    }
        while (n1 > 10)
    {
        n2 = prompt("Te dije menor a 10! >:C ");
    }

var n3 = prompt("Ingrese tercera calificación (entre 1 y 10)");
    while (n3 == 0)
    {
        n3 = prompt("cero? pero si te dan 1 por escribir tu nombre! no puede ser!");
    }
        while (n1 > 10)
    {
        n3 = prompt("Te dije menor a 10! >:C ");
    }


var resultado = (parseInt(n1) + parseInt(n2) + parseInt(n3)) / 3;

if(resultado >= 6) {
	document.write("Felicidades! has aprobado! ❤ con un promedio de " + resultado + "!!");
}
else if (resultado < 6) {
	document.write("Uy! que pena :( .. reprobaste! con un promedio de " + resultado);
}
