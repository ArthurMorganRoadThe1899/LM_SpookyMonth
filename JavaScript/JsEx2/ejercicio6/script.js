function contrasenaSegura(){
    let contrasena = document.getElementById("pwd").value;
    //errors = [];

    if (contrasena.length < 8) {
        //errors.push("# Tu contraseña debería contener 8 carácteres"); 
        document.getElementById("seguroLongitu").innerHTML = ("&nbsp;Tu contraseña debería contener 8 carácteres&nbsp;");
    }else{
        document.getElementById("seguroLongitu").innerHTML = ("-");
    }

    if (contrasena.search(/[a-z]/) < 0) {
        //errors.push("# Deberías poner alguna minúscula");
        document.getElementById("segurontMinus").innerHTML = ("&nbsp;Deberías poner alguna minúscula&nbsp;");
    }else{
        document.getElementById("segurontMinus").innerHTML = ("-");
    }

    if (contrasena.search(/[A-Z]/) < 0) {
        //errors.push("# Deberías poner alguna mayuscula");
        document.getElementById("segurontMayus").innerHTML = ("&nbsp;Deberías poner alguna mayuscula&nbsp;");
    }else{
        document.getElementById("segurontMayus").innerHTML = ("-");
    }

    if (contrasena.search(/[0-9]/) < 0) {
        //errors.push("# Deberías poner algún número"); 
        document.getElementById("segurontNumer").innerHTML = ("&nbsp;Deberías poner algún número&nbsp;");
    }else{
        document.getElementById("segurontNumer").innerHTML = ("-");
    }


    /*if (errors.length > 0) {
        alert(errors.join("\n"));
        
        return false;
    }

    return true;*/
}