// 1. Te quemo
let title = document.getElementById("OGtitle");
let a = document.querySelectorAll("a");

title.addEventListener('mouseenter', function() {
  title.firstElementChild.style.color = "green";
  title.style.background = "red"
  title.style.borderColor = "green"
});


title.addEventListener('mouseleave', function() {
  title.firstElementChild.style.color = "white";
  title.style.background = "black"
  title.style.borderColor = "white"
});

// 2. The Silver Camping
// Me di cuenta más tarde que esto ni era esdeveniment, pero me dio una pereza terrible cambiarlo por un click
let Ca = document.createElement("a");
const text = document.createTextNode("Personajes de videojuegos");
Ca.appendChild(text);
Ca.href = "https://youtu.be/d1WsxRc2X04"
title.appendChild(Ca);

// 3. Cambiar fondo cuando pongas el cursor encima de algo







// Fallo
/*
  let KH = document.getElementById("KH");
  let ui = new Audio('audio/ui.mp3');
  
  KH.addEventListener('mouseenter', function() {
    ui.play();
});
*/