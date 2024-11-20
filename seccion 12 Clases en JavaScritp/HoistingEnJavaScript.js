// Consepto de Hoisting en Clases JavaScript
// El concepto de Hoisting se aplica a objetos pero no a clases

// let Mascota2 = new Mascota('Palomo','Paloma');// este objeto dara error ya que esta antes de la clase 

class Mascota{
    constructor(nombre,raza){
        this._nombre = nombre;
        this._raza = raza;

    }
    get nombre(){
        return this._nombre;
    }

    set nombre(_nombre){
        this._nombre = nombre;
    }
}

let Mascota1 = new Mascota('Firulais','No mames perro');// en las clases de javascript no se aplica el concepto de Hoisting
// esto quiere decir que los objetos solo se pueden crear despues de la clase no antes
Mascota1._nombre = 'Firurin';

console.log(Mascota1._nombre);