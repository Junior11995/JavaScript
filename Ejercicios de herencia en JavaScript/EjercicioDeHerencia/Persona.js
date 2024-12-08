// Ejercicio de Herencias en JavaScript
class Persona{
    static contadorPersonas = 0;
    constructor(idPersona,nombre,apellido,edad){
        this._idPersona = idPersona;
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
    }
    get idPersona(){
        return this._idPersona;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }
    get edad(){
        return this._edad;
    }
    set edad(edad){
        this._edad = edad;
    }
    toString(){
        return `
        ${this._idPersona}// esta forma de estructura se llama back slast 
        ${this._nombre}// sirve para concatenar sin tener que usar +' '+
        ${this._apellido}// y tambien se puede estructurar mejor el codigo
        ${this._edad}
        `;
    }
}
let persona1 = new Persona('#1','juan','valdez',35);
persona1.nombre = 'martino';
console.log(persona1.toString());