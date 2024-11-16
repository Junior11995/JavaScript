// acceder a las propiedades de un objeto

let casa = {
    direccion: "Calle la union spm",
    numero: 20,
    abitaciones: 3,
    cocina: 1
}

console.log(casa.abitaciones)// esta es la forma mas comun de llamar a un objeto
console.log(casa['direccion']);// se puede acceder a los elementos de un objeto llamandolos como si fuera un arreglo

// con el ciclo for in podemos recorrer las propiedades de un objeto en JavaScript
for (Propiedad in casa){
    console.log(Propiedad);
    console.log(casa[Propiedad]);
}