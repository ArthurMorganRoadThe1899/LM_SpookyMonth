// Cambiar fondo del titulo a verde oscuro
let fondoVerdeTitulo = document.getElementById('titol').style.background = "#006400";

// Añadir nueva sección al menu
let Ca = document.createElement("a");
let Cli = document.createElement("li");
const text = document.createTextNode("Sobre nosaltres");
Cli.appendChild(Ca);
Ca.appendChild(text);
Ca.href = "https://www.youtube.com/watch?v=jNY_wLukVW0&list=PLxzSZG7g8c8x6GYz_FcNr-3zPQ7npP6WF&ab_channel=Radiohead-Topic"
document.getElementById("menu").appendChild(Cli, Ca);

// Cambiar el color de los articulos a gris claro
let articleSelector = document.querySelectorAll('article');
for (let i = 0; i < articleSelector.length; i++) {
    articleSelector[i].style.backgroundColor = "#acabab";
}

// Letra del menu en rojo
let menuRojo = document.querySelectorAll("#menu li a");
for (let i = 0; i < menuRojo.length; i++) {
    menuRojo[i].style.color = "red";
}

// Crear un paragrafo que ponga 'Segueix-nos a les xarxes socials!' al final del main
let p = document.createElement("p");
let textP1 = document.createTextNode("Segueix-nos a les xarxes socials!");
p.appendChild(textP1);
document.getElementsByTagName('main')[0].appendChild(p);

// Eliminar 'Serveis' del menu
let menu = document.getElementById("menu");