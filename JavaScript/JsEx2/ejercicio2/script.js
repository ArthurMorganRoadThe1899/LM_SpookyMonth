function Suma(){
    let numero1 = Number(document.getElementById("n1").value);
    let numero2 = Number(document.getElementById("n2").value);
    let resultado = numero1 + numero2;

    document.getElementById("numero").innerHTML = ("El resultado de " + numero1 + " y " + numero2 + " es igual a " + resultado);
}