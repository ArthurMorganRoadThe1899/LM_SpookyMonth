const  Sayori = document.querySelector(".starfox img");
const darPista = document.querySelector(".escribeme");
const crearTeclitas = document.querySelector(".teclao");
const VictoriaNeno = document.querySelector(".intentos b");
const Rejugar = document.querySelector(".rejugar");
const mensajitos = document.querySelector(".mensajesParaElJugador");
let palabrusquiActual, incorrectos, letrasAcertadas;
const cantidadIntentos = 6;

const resetearJuego = () => {
    letrasAcertadas = [];
    incorrectos = 0;
    darPista.innerHTML = palabrusquiActual.split("").map(() => `<li class="letra"></li>`).join("");
    mensajitos.classList.remove("va");
    crearTeclitas.querySelectorAll("button").forEach(btn => btn.disabled = false)
    VictoriaNeno.innerText = `${incorrectos} / ${cantidadIntentos}`;
    Sayori.src = `images/ahorcaofase${incorrectos}.svg`;
    
}

const obtenerPalabraPalJuegico = () =>{
    const { palabra, pista } = listaEpalabras[Math.floor(Math.random() * listaEpalabras.length)];
    palabrusquiActual = palabra;
    document.querySelector(".pistaNeno b").innerText = pista;
    resetearJuego();
}

const seAcaboNeno = (victoria) => {
    setTimeout(() => {
        const mensajitoDelMensajito = victoria ? `Has encontrao la palabra ` : `La palabra correcta era `;
        mensajitos.querySelector("img").src = `images/${victoria ? `ICHIBANAAAA` : `perdisteWayne`}.gif`;
        mensajitos.querySelector("h4").innerText = `${victoria ? `VAMOOO ICHIBAAAN` : `Pathetic`}`;
        mensajitos.querySelector("p").innerHTML = `${mensajitoDelMensajito} <b>${palabrusquiActual}</b>`;
        mensajitos.classList.add("va")
    }, 300);
}

const juegaso = (button, palabraClicaa) => {
    if(palabrusquiActual.includes(palabraClicaa)){
        [...palabrusquiActual].forEach((letra, punto) => {
            if(letra === palabraClicaa){
                letrasAcertadas.push(letra);
                darPista.querySelectorAll("li")[punto].innerText = letra;
                darPista.querySelectorAll("li")[punto].classList.add("acertada");
            }
        })
    }else{
        incorrectos++;
        Sayori.src = `images/ahorcaofase${incorrectos}.svg`;
    }

    button.disabled = true;
    VictoriaNeno.innerText = `${incorrectos} / ${cantidadIntentos}`;

    if(incorrectos === cantidadIntentos) return seAcaboNeno(false);
    if(letrasAcertadas.length === palabrusquiActual.length) return seAcaboNeno(true);
}

for(let i = 97; i <= 122; i++){
    const button = document.createElement("button")
    button.innerText = String.fromCharCode(i);
    crearTeclitas.appendChild(button);
    button.addEventListener("click", e => juegaso(e.target, String.fromCharCode(i)));
}

obtenerPalabraPalJuegico();
Rejugar.addEventListener("click", obtenerPalabraPalJuegico)