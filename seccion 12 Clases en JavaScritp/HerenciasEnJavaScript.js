// como funcionan las herencias en Javascript
/**
 * Pasos 
 * Prime se declara una clase padre 
 * Luego se crea una clase que hereda a la clase padre
 * Nota
 * La Clase que hereda puede tener sus propios atributos aparte de los que hereda de la 
 * clase padre
 * 
 */

// clase padre
class Persona{
    constructor(nombre,apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }
    // Nombre
    get nombre(){
        return this._nombre;
    }
    set nombre(_nombre){
        this.nombre = this._nombre;
    }
    // apellido
    get apellido(){
        return this._apellido;
    }
    set apellido(_apellido){
        this.apellido = this._apellido;
    }
}

//let Persona1 = new Persona('alexis','valera');
//Persona1._nombre = 'Juan';
//Persona1._apellido = 'Pablo';
//console.log(Persona1._nombre+' '+Persona1._apellido);
// Herencia 
class Empleado extends Persona{
    constructor(nombre,apellido,Posicion){
        super(nombre,apellido);
        this._Posicion = Posicion;
    }
    get Posicion(){
        return this._Posicion;
    }
    set Posicion(Posicion){
        this._Posicion = Posicion;
    }
}
let Empleado1 = new Empleado('Pedro','Chireno','Coordinador');
Empleado1.Posicion = 'Coordinador Principal';
console.log(Empleado1.nombre+' '+Empleado1.apellido+' '+Empleado1.Posicion);// en la herencia puedo heredar todas las propiedades de padre
