function Operaciones(){
    let numero1 = Number(document.getElementById("n1").value);
    let numero2 = Number(document.getElementById("n2").value);
    let resultadoSuma = numero1 + numero2;
    let resultadoResta = numero1 - numero2;
    let resultadoMultiplicacion = numero1 * numero2;
    let resultadoDivision = numero1 / numero2;

    document.getElementById("numero").innerHTML = ("&nbsp;Aquí tienes los resultados:&nbsp;<br>" + numero1 + " + " + numero2  + " = " + resultadoSuma +"<br>"+ numero1 + " - " + numero2  + " = " + resultadoResta +"<br>"+ numero1 + " x " + numero2  + " = " + resultadoMultiplicacion +"<br>"+ numero1 + " / " + numero2  + " = " + resultadoDivision);
}