function pasarFahrenheit(){
    let celsius = Number(document.getElementById("n").value);

    document.getElementById("fahrenheit").innerHTML = (celsius + "º Celsius en Fahrenheit es igual a " + ((celsius * 9/5) + 32) + "º Fahrenheit");
}