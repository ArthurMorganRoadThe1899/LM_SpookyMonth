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

// 3. Cambiar fondo cuando pongas el cursor encima de algo (en la página de KH)
let roxas = document.getElementById("roxas");
let sora = document.getElementById("sora");

roxas.addEventListener('mouseenter', function() {
    document.body.style.backgroundImage = "url('https://miro.medium.com/v2/resize:fit:1400/1*sK-oygRJt6uz5mHjk_bYSQ.jpeg')"; 
});


// 4. Hazle click a Sora y te vas a mi página de Majima by de face ;3
sora.addEventListener('click', function() {
  window.location.href = 'https://arthurmorganroadthe1899.github.io';
});

// 5. Le haces doble click a Riku y hace algo que me habré acordado de apuntar
let riku = document.getElementById("riku");
riku.addEventListener('dblclick', function() {
  window.location.href = 'https://youtu.be/OPuTgyaM7cw';
});



// Fallo, quería meter el audio vía uno de estas cosas del DOM xD
/*
  let KH = document.getElementById("KH");
  let ui = new Audio('audio/ui.mp3');
  
  KH.addEventListener('mouseenter', function() {
    ui.play();
});
*/