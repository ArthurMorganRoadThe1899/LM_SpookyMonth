function obtener_Nombre(){
    const nombre = document.getElementById("nombre").value;

    alert ("¡Bienvenido " + nombre + "!");
    window.location.href = "content/index.html";
    window.location.replace("content/index.html");
}