// Como usar clases en Javascritp
class Persona{
    constructor(nombre,apellido){// se debe crear un constructor para que reciba los datos del objeto externo
        this.nombre = nombre;
        this.apellido = apellido;

    }
}

let persona1 = new Persona('Junior','Valera');// asi se crea un objeto en a partir de una clase
console.log(persona1);