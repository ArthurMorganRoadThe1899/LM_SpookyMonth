function contrasenaSegura(){
    let contrasena = document.getElementById("pwd").value;
    //errors = [];

    if (contrasena.length < 8) {
        //errors.push("# Tu contraseña debería contener 8 carácteres"); 
        document.getElementById("seguroLongitu").innerHTML = ("Tu contraseña debería contener 8 carácteres");
    }else{
        document.getElementById("seguroLongitu").innerHTML = ("-");
    }

    if (contrasena.search(/[a-z]/) < 0) {
        //errors.push("# Deberías poner alguna minúscula");
        document.getElementById("segurontMinus").innerHTML = ("Deberías poner alguna minúscula");
    }else{
        document.getElementById("segurontMinus").innerHTML = ("-");
    }

    if (contrasena.search(/[A-Z]/) < 0) {
        //errors.push("# Deberías poner alguna mayuscula");
        document.getElementById("segurontMayus").innerHTML = ("Deberías poner alguna mayuscula");
    }else{
        document.getElementById("segurontMayus").innerHTML = ("-");
    }

    if (contrasena.search(/[0-9]/) < 0) {
        //errors.push("# Deberías poner algún número"); 
        document.getElementById("segurontNumer").innerHTML = ("Deberías poner algún número");
    }else{
        document.getElementById("segurontNumer").innerHTML = ("-");
    }


    /*if (errors.length > 0) {
        alert(errors.join("\n"));
        
        return false;
    }

    return true;*/
}