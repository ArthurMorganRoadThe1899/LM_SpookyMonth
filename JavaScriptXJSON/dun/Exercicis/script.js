// 1. Cambiar fondo del titulo a verde oscuro
let fondoVerdeTitulo = document.getElementById('titol').style.background = "#006400";


// 2. Añadir nueva sección al menu
let Ca = document.createElement("a");
let Cli = document.createElement("li");
const text = document.createTextNode("Sobre nosaltres");
Cli.appendChild(Ca);
Ca.appendChild(text);
Ca.href = "https://www.youtube.com/watch?v=jNY_wLukVW0&list=PLxzSZG7g8c8x6GYz_FcNr-3zPQ7npP6WF&ab_channel=Radiohead-Topic"
document.getElementById("menu").appendChild(Cli, Ca);


// 3. Cambiar el color de los articulos a gris claro
let articleSelector = document.querySelectorAll('article');
for (let i = 0; i < articleSelector.length; i++) {
    articleSelector[i].style.backgroundColor = "#acabab";
}


// 4. Letra del menu en rojo
let menuRojo = document.querySelectorAll("#menu li a");
for (let i = 0; i < menuRojo.length; i++) {
    menuRojo[i].style.color = "red";
}


// 5. Crear un paragrafo que ponga 'Segueix-nos a les xarxes socials!' al final del main
let p = document.createElement("p");
let textP1 = document.createTextNode("Segueix-nos a les xarxes socials!");
p.appendChild(textP1);
document.getElementsByTagName('main')[0].appendChild(p);


// 6. Eliminar 'Serveis' del menu
let menu = document.getElementById("menu");
menu.removeChild(menu.children[1]);


// 7. Cambiar background del footer
document.querySelector("footer").style.backgroundColor = "#9b9797";


// 8. Cambiar el font-size de la etiqueta <p> a 36px
let pGordo = document.querySelectorAll("p");
for (let i = 0; i < pGordo.length; i++) {
    pGordo[i].style.fontSize = "36px";
}


// 9. Cambiar el background y titulo de color de fondo mediante un click a donde sea
document.getElementById("titol").addEventListener("click", function() {
    this.style.backgroundColor = "#336699";
    document.getElementById("menu").style.background = "#FF0000";
});


    /*********************************
    *  EJERCICIOS DE ESDEVENIMENTS  *
    * (NO SE COMO ES EN CASTELLANO) *
    *********************************/

// 1. Cambiar el color del titulo al tener el cursor por encima de este
let titulo = document.getElementById("titol");

titulo.addEventListener('mouseenter', function() {
    titulo.style.backgroundColor = "purple";
});

titulo.addEventListener('mouseleave', function() {
    titulo.style.backgroundColor = "#006400";
});


// 2. Alertar en los articulos al dar click
let articles = document.querySelectorAll('article');

articles.forEach(function(article) {
    article.addEventListener('click', function() {
        alert('¿Qué haces neno?');
    });
});

// 3. Cambiar el color de los articulos al pasar el cursor por encima suya
articles.forEach(article => {
    article.addEventListener('mouseenter', function() {
        article.style.backgroundColor = 'red';
    });

    article.addEventListener('mouseleave', function() {
        article.style.backgroundColor = '#acabab';
    });
});

// 4. Cambiar el color de menu al pasar el cursor por encima suya
menu.addEventListener('mouseenter', function() {
    menu.style.backgroundColor = "purple";
});

menu.addEventListener('mouseleave', function() {
    menu.style.backgroundColor = "#333";
});


// 5. Muestra la posición del índice al pasar el cursor por encima suya


// 6. Cambiar el color del footer cuando se hace click
let footer = document.querySelector("footer");

footer.addEventListener('click', function() {
    footer.style.backgroundColor = "red";
});

// 7. Cambiar el color del titulo al hacer doble click
titulo.addEventListener('dblclick', function() {
    titulo.style.backgroundColor = "#f7b90f";
});

// 8. Cambia el color del fondo de los <p> del segundo articulo cuando le des click
let pp = document.querySelectorAll("p");

articles[1].addEventListener('click', function() {
    pp[1].style.backgroundColor = "blue";
});

// 9. Redirigir a otra página al darle click al titulo
titulo.addEventListener('click', function() {
    window.location.href = "https://youtu.be/wZVcyp5q-ds"
});


// 10. Cambiar los textos del menu al darle click
let aS = document.querySelectorAll("a");

menu.addEventListener('click', function() {
    for (let i = 0; i < aS.length; i++) {
        aS[i].textContent = "¡Sorpresa!";
    }
});
