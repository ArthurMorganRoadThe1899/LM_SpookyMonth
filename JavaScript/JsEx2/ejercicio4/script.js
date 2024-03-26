function comprobadorMagico(){
    let edad = Number(document.getElementById("age").value);

    if(edad >= 18){
        document.getElementById("legal").innerHTML = ("¿Tienes "+ edad + " años? Perfecto, aquí tienes...<br>https://youtu.be/Yhe7rcDUTeI");
    }else if(edad < 0){
        document.getElementById("legal").innerHTML = ("¿Tienes "+ edad + " años? Joer ijo mio, nace antes de navegar por internete");
    }else{
        document.getElementById("legal").innerHTML = ("¿Tienes "+ edad + " años? Nao nao amigo, no eres mayor");
    }
    
}