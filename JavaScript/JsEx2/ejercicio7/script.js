let valorActual = "0";
let mostrarResultado;

// Función para añadir numerines a través de los botones //
function ponerNumerines(valor){
   if(valorActual === "0" || mostrarResultado){
    valorActual = valor;
   }else{
    valorActual += valor;
   }

   mostrarResultado = false;
   actualizarNumerinDeLaBarra();
}

// Función para actualizar el número de la barra (se usa todo el rato) //
function actualizarNumerinDeLaBarra(){
    const numeroBarra = document.getElementById("master");
    numeroBarra.textContent = valorActual;
}

// Borrar de uno en uno con el botón ← //
function borrarUno(){
    valorActual = valorActual.slice(0, -1);
    if(valorActual === ""){
        valorActual = "0";
    }
    actualizarNumerinDeLaBarra();
}

// Borrar todo con el botón AC //
function borrarTo(){
    valorActual = "0";
    actualizarNumerinDeLaBarra();
}

// Calcular  resultado //
function poderMATEMATICO(){
    try{
        const resultado = eval(valorActual);
        valorActual += "\n"+ resultado.toString();
        actualizarNumerinDeLaBarra();
    }catch(error){
        valorActual += "\nNao nao";
        actualizarNumerinDeLaBarra();
    }
    mostrarResultado = true;
}

// Para este ejercicio use referencia para tratar de entender como hacer una calculadora.
// Eso si, estuve un rato revisando el código para ir entendiendolo poco a poco xD
// https://www.educative.io/answers/how-to-build-a-calculator-in-javascript