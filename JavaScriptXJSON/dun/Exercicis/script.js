// Cambiar fondo del titulo a verde oscuro
let fondoVerdeTitulo = document.getElementById('titol').style.background = "#006400";

// Añadir nueva sección al menu
let a = document.createElement("a");
let li = document.createElement("li");
const text = document.createTextNode("Sobre nosaltres");
li.appendChild(a);
a.appendChild(text);
a.href = "https://www.youtube.com/watch?v=jNY_wLukVW0&list=PLxzSZG7g8c8x6GYz_FcNr-3zPQ7npP6WF&ab_channel=Radiohead-Topic"
document.getElementById("menu").appendChild(li, a);

// Cambiar el color de los articulos a gris claro
let articleSelector = document.querySelectorAll('article');
for (let i = 0; i < articleSelector.length; i++) {
    articleSelector[i].style.backgroundColor = "#acabab";
}

// Letra del menu en rojo
let menuC = document.getElementById('menu').style.color = "#006400";