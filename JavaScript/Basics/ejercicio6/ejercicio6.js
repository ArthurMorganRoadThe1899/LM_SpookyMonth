function CochesitoLere(marca, modelo, anyo){
    this.marca = marca;
    this.modelo = modelo;
    this.anyo = anyo;
}

let c1 = new CochesitoLere("Citroen", "modeloV1", 1995);
let c2 = new CochesitoLere("Terreneneitor", "BRUTALv4", 2019);
let c3 = new CochesitoLere("Roy Mustang", "Fire Alquimist", 2003);

let arrayCoches = [c1, c2, c3]

    for(i = 0; i < arrayCoches.length; i++){
        mostrarCochesitos = CochesitoLere = arrayCoches[i];
        console.log(mostrarCochesitos);
    }