// uso de la palabra estatic en javascript con un contador de id
class Persona{
    static contadorId = 0;
    constructor(nombre,apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        this.Idpersona = ++Persona.contadorId;// con this se declara la variable y se llama con la clase al contador
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    // Un objeto
    nombreCompleto(){
        return this.Idpersona+' '+this._nombre+' '+this._apellido;
    }
}
let persona1 = new Persona('Juan','lopez');
persona1.nombre = 'Pedro';
console.log(persona1.nombreCompleto());